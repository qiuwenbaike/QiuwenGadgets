/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EnhancedSpecialSearch}
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

// dist/EnhancedSpecialSearch/EnhancedSpecialSearch.js
//! src/EnhancedSpecialSearch/modules/constant.ts
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
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/EnhancedSpecialSearch/modules/util/openPage.ts
var openPage = (url) => {
  const element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
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
//! src/EnhancedSpecialSearch/modules/util/generateSelectElement.ts
var generateSelectElement = () => {
  const selectElement = document.createElement("select");
  selectElement.id = "enhancedSpecialSearch";
  selectElement.className = "oo-ui-dropdownWidget-handle";
  selectElement.style.width = "auto";
  const createOption = ({
    site,
    url,
    origin
  }) => {
    const optionElementelement = new Option(site, url, origin);
    if (origin) {
      optionElementelement.dataset["origin"] = "1";
    }
    return optionElementelement;
  };
  const optionData = getOptionData();
  var _iterator = _createForOfIteratorHelper(optionData), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const data = _step.value;
      const optionElement = createOption(data);
      selectElement.append(optionElement);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return selectElement;
};
//! src/EnhancedSpecialSearch/modules/processElement.ts
var processElement = (searchElement, targetElement) => {
  targetElement.setAttribute("style", "display:flex;flex-wrap:wrap;align-items:center");
  const selectElement = generateSelectElement();
  targetElement.append(selectElement);
  addListener(searchElement, selectElement);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget2.getBody)().then(function enhancedSpecialSearch($body) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvRW5oYW5jZWRTcGVjaWFsU2VhcmNoLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL29wdGlvbnMuanNvbiIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvZ2V0T3B0aW9uRGF0YS50cyIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVNlbGVjdEVsZW1lbnQudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcblxuZXhwb3J0IHtXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9O1xuIiwgImltcG9ydCB7V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlbmhhbmNlZFNwZWNpYWxTZWFyY2goJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdTZWFyY2gnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2VhcmNoRWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkYm9keS5maW5kKCcjc2VhcmNoJykuZ2V0KDApID8/ICRib2R5LmZpbmQoJyNwb3dlcnNlYXJjaCcpLmdldCgwKTtcblx0Y29uc3QgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkYm9keS5maW5kKCcjbXctc2VhcmNoLXRvcC10YWJsZScpLmdldCgwKTtcblx0aWYgKCFzZWFyY2hFbGVtZW50IHx8ICF0YXJnZXRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cHJvY2Vzc0VsZW1lbnQoc2VhcmNoRWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XG59KTtcbiIsICJjb25zdCBvcGVuUGFnZSA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXG5cdGVsZW1lbnQuY2xpY2soKTtcbn07XG5cbmV4cG9ydCB7b3BlblBhZ2V9O1xuIiwgImltcG9ydCB7b3BlblBhZ2V9IGZyb20gJy4vdXRpbC9vcGVuUGFnZSc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3RFbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHR0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInNlYXJjaFwiXScpO1xuXHRcdGlmICghaW5wdXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBzZWxlY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cdFx0aWYgKG9wdGlvbkVsZW1lbnQuZGF0YXNldFsnb3JpZ2luJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdG9wZW5QYWdlKG9wdGlvbkVsZW1lbnQudmFsdWUucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXRFbGVtZW50LnZhbHVlKSkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgIntcblx0XCJzaXRlRG9tYWluXCI6IFwicWl1d2VuYmFpa2UuY25cIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRCYWlkdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYWlkdScsXG5cdFx0XHRqYTogJ0JhaWR1Jyxcblx0XHRcdHpoOiAn55m+5bqmJyxcblx0XHR9KSxcblx0XHRCaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+F5bqUJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/heaHiScsXG5cdFx0fSksXG5cdFx0R29vZ2xlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dvb2dsZScsXG5cdFx0XHRqYTogJ0dvb2dsZScsXG5cdFx0XHR6aDogJ+iwt+atjCcsXG5cdFx0fSksXG5cdFx0UWl1d2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1FpdXdlbiBCYWlrZScsXG5cdFx0XHRqYTogJ+axguiBnueZvuenkScsXG5cdFx0XHQnemgtaGFucyc6ICfmsYLpl7vnmb7np5EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rGC6IGe55m+56eRJyxcblx0XHR9KSxcblx0XHRTb2dvdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb2dvdScsXG5cdFx0XHRqYTogJ1NvZ291Jyxcblx0XHRcdHpoOiAn5pCc54uXJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG50eXBlIE9wdGlvbkRhdGEgPSB7XG5cdHNpdGU6IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRvcmlnaW4/OiBib29sZWFuO1xufTtcblxuY29uc3QgZ2V0T3B0aW9uRGF0YSA9ICgpOiBPcHRpb25EYXRhW10gPT4ge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1FpdXdlbicpLFxuXHRcdFx0b3JpZ2luOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmFpZHUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0lMjAkMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdCaW5nJyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0dvb2dsZScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1NvZ291JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zb2dvdS5jb20vd2ViP3F1ZXJ5PXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogJzM2MCcsXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zby5jb20vcz9xPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdF07XG59O1xuXG5leHBvcnQge3R5cGUgT3B0aW9uRGF0YSwgZ2V0T3B0aW9uRGF0YX07XG4iLCAiaW1wb3J0IHt0eXBlIE9wdGlvbkRhdGEsIGdldE9wdGlvbkRhdGF9IGZyb20gJy4uL2dldE9wdGlvbkRhdGEnO1xuXG5jb25zdCBnZW5lcmF0ZVNlbGVjdEVsZW1lbnQgPSAoKTogSFRNTFNlbGVjdEVsZW1lbnQgPT4ge1xuXHRjb25zdCBzZWxlY3RFbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG5cdHNlbGVjdEVsZW1lbnQuaWQgPSAnZW5oYW5jZWRTcGVjaWFsU2VhcmNoJztcblx0c2VsZWN0RWxlbWVudC5jbGFzc05hbWUgPSAnb28tdWktZHJvcGRvd25XaWRnZXQtaGFuZGxlJztcblx0c2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9ICdhdXRvJztcblxuXHRjb25zdCBjcmVhdGVPcHRpb24gPSAoe3NpdGUsIHVybCwgb3JpZ2lufTogT3B0aW9uRGF0YSk6IEhUTUxPcHRpb25FbGVtZW50ID0+IHtcblx0XHRjb25zdCBvcHRpb25FbGVtZW50ZWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBuZXcgT3B0aW9uKHNpdGUsIHVybCwgb3JpZ2luKTtcblxuXHRcdGlmIChvcmlnaW4pIHtcblx0XHRcdG9wdGlvbkVsZW1lbnRlbGVtZW50LmRhdGFzZXRbJ29yaWdpbiddID0gJzEnO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25FbGVtZW50ZWxlbWVudDtcblx0fTtcblxuXHRjb25zdCBvcHRpb25EYXRhOiBPcHRpb25EYXRhW10gPSBnZXRPcHRpb25EYXRhKCk7XG5cdGZvciAoY29uc3QgZGF0YSBvZiBvcHRpb25EYXRhKSB7XG5cdFx0Y29uc3Qgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBjcmVhdGVPcHRpb24oZGF0YSk7XG5cdFx0c2VsZWN0RWxlbWVudC5hcHBlbmQob3B0aW9uRWxlbWVudCk7XG5cdH1cblxuXHRyZXR1cm4gc2VsZWN0RWxlbWVudDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVTZWxlY3RFbGVtZW50fTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2VuZXJhdGVTZWxlY3RFbGVtZW50fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTZWxlY3RFbGVtZW50JztcblxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoc2VhcmNoRWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyJyk7XG5cblx0Y29uc3Qgc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQgPSBnZW5lcmF0ZVNlbGVjdEVsZW1lbnQoKTtcblx0dGFyZ2V0RWxlbWVudC5hcHBlbmQoc2VsZWN0RWxlbWVudCk7XG5cblx0YWRkTGlzdGVuZXIoc2VhcmNoRWxlbWVudCwgc2VsZWN0RWxlbWVudCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGlDQUFpREMsR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEI7O0FDQ2pHLElBQUFDLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBTUMsV0FBWUMsU0FBc0I7QUFDdkMsUUFBTUMsVUFBNkJDLFNBQVNDLGNBQWMsR0FBRztBQUU3REYsVUFBUUcsYUFBYSxRQUFRSixHQUFHO0FBQ2hDQyxVQUFRRyxhQUFhLFVBQVUsUUFBUTtBQUN2Q0gsVUFBUUcsYUFBYSxPQUFPLHFCQUFxQjtBQUVqREgsVUFBUUksTUFBTTtBQUNmOztBQ05BLElBQU1DLGNBQWNBLENBQUNDLGVBQTRCQyxrQkFBMkM7QUFDM0ZELGdCQUFjRSxpQkFBaUIsVUFBV0MsV0FBNkI7QUFDdEUsVUFBTUMsZUFBd0NKLGNBQWNLLGNBQWMsaUJBQWlCO0FBQzNGLFFBQUksQ0FBQ0QsY0FBYztBQUNsQjtJQUNEO0FBRUEsVUFBTUUsZ0JBQW1DTCxjQUFjSSxjQUFjLGdCQUFnQjtBQUNyRixRQUFJQyxjQUFjQyxRQUFRLFFBQVEsR0FBRztBQUNwQztJQUNEO0FBRUFKLFVBQU1LLGVBQWU7QUFDckJoQixhQUFTYyxjQUFjRyxNQUFNQyxRQUFRLE1BQU1DLG1CQUFtQlAsYUFBYUssS0FBSyxDQUFDLENBQUM7RUFDbkYsQ0FBQztBQUNGOztBQ2hCQyxJQUFBRyxhQUFjOztBQ0RmLElBQUFDLG9CQUF1QnRCLFFBQUEsaUJBQUE7QUFFdkIsSUFBTXVC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bUMsVUFBVTtBQUNoRDtFQUNEO0FBRUEsUUFBTWtFLGlCQUFBSyxrQkFBeUNELE1BQU1FLEtBQUssU0FBUyxFQUFFckUsSUFBSSxDQUFDLE9BQUEsUUFBQW9FLG9CQUFBLFNBQUFBLGtCQUFLRCxNQUFNRSxLQUFLLGNBQWMsRUFBRXJFLElBQUksQ0FBQztBQUMvRyxRQUFNVyxnQkFBeUN3RCxNQUFNRSxLQUFLLHNCQUFzQixFQUFFckUsSUFBSSxDQUFDO0FBQ3ZGLE1BQUksQ0FBQytELGlCQUFpQixDQUFDcEQsZUFBZTtBQUNyQztFQUNEO0FBRUFtRCxpQkFBZUMsZUFBZXBELGFBQWE7QUFDNUMsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAib3BlblBhZ2UiLCAidXJsIiwgImVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAiY2xpY2siLCAiYWRkTGlzdGVuZXIiLCAidGFyZ2V0RWxlbWVudCIsICJzZWxlY3RFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiaW5wdXRFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAib3B0aW9uRWxlbWVudCIsICJkYXRhc2V0IiwgInByZXZlbnREZWZhdWx0IiwgInZhbHVlIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInNpdGVEb21haW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkJhaWR1IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIkJpbmciLCAiR29vZ2xlIiwgIlFpdXdlbiIsICJTb2dvdSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0T3B0aW9uRGF0YSIsICJzaXRlIiwgIm9yaWdpbiIsICJjb25jYXQiLCAiZ2VuZXJhdGVTZWxlY3RFbGVtZW50IiwgImlkIiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJ3aWR0aCIsICJjcmVhdGVPcHRpb24iLCAib3B0aW9uRWxlbWVudGVsZW1lbnQiLCAiT3B0aW9uIiwgIm9wdGlvbkRhdGEiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImRhdGEiLCAiYXBwZW5kIiwgImVyciIsICJlIiwgImYiLCAicHJvY2Vzc0VsZW1lbnQiLCAic2VhcmNoRWxlbWVudCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZW5oYW5jZWRTcGVjaWFsU2VhcmNoIiwgIiRib2R5IiwgIl8kYm9keSRmaW5kJGdldCIsICJmaW5kIl0KfQo=

})();

/* </nowiki> */

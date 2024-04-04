/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-rightsfilter.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LogFilter}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/LogFilter/LogFilter.js
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
//! src/LogFilter/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-LogFilter__Initialized";
var options_default = {
  configKey
};
//! src/LogFilter/modules/messages.ts
var MESSAGES = {
  "filter-portlet-text": "过滤",
  "filter-portlet-description": "打开交互式日志正则过滤器",
  "filter-gadget-page": "MediaWiki:Gadget-LogFilter.js",
  "filter-rights-list-instructions": "正则表达式过滤以空格分隔的权限列表。",
  "filter-other-list-instructions": "正则表达式过滤本列表的纯文本样式。",
  "filter-legend": "过滤列表",
  "filter-option-added": "添加权限",
  "filter-option-removed": "删除权限",
  "filter-option-added-or-removed": "添加或删除权限",
  "filter-option-added-removed-static": "已添加/已移除/保持不变",
  "filter-regex-label": "正则表达式：",
  "filter-invert-label": "反选",
  "filter-case-label": "大小写敏感",
  "filter-filter-button": "过滤",
  "filter-highlight-button": "高亮"
};
//! src/LogFilter/modules/core.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
var LogFilter = class _LogFilter {
  rightsLogOnly = location.href.includes("type=rights") || location.href.includes("Log/rights");
  lastClicked = false;
  $body;
  constructor($body) {
    this.$body = $body;
    mw.messages.set(MESSAGES);
  }
  addPortletLink() {
    const portletLink = mw.util.addPortletLink(this.$body.find("#p-cactions").length ? "p-cactions" : "p-tb", "#", _LogFilter.msg("portlet-text"), "ca-rxfilter", _LogFilter.msg("portlet-description"));
    if (portletLink) {
      const $portletLink = $(portletLink);
      $portletLink.find("a").on("click", (event) => {
        event.preventDefault();
        this.buildForm();
      });
    }
    if (URL_LIFILTER || URL_LIFILTER_EXPR) {
      this.buildForm();
    }
  }
  buildForm() {
    const $pageTop = this.$body.find("#contentSub, #topbar");
    if (!$pageTop.length) {
      return;
    }
    let oldInput = "";
    const instructions = this.rightsLogOnly ? _LogFilter.msg("rights-list-instructions") : _LogFilter.msg("other-list-instructions");
    this.$body.find("#ca-rxfilter").hide();
    const casing = URL_LIFILTER_CASE === "1";
    const hilight = URL_LIFILTER_HILIGHT === "1";
    const inverted = URL_LIFILTER_INV === "1";
    const $fieldSet = $("<fieldset>").attr("id", "rightsFilter").text(instructions);
    const $legend = $("<legend>").text(_LogFilter.msg("legend"));
    $fieldSet.append($legend);
    let rfSelect = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null);
    if (this.rightsLogOnly) {
      rfSelect = /* @__PURE__ */ import_ext_gadget.default.createElement("select", {
        id: "gadget-log_filter__select"
      }, /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-removed"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added-or-removed"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added-removed-static"))));
    }
    const fieldSetInner = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__regex"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__regex"
    }, mw.html.escape(_LogFilter.msg("regex-label"))), /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__regex"
    })), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__checkboxes"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__invert"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__invert",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__invert"
    }, mw.html.escape(_LogFilter.msg("invert-label")))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__case"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__case",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__case"
    }, mw.html.escape(_LogFilter.msg("case-label"))))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__buttons"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      class: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "0"
    }, "$", mw.html.escape(_LogFilter.msg("filter-button"))), /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      class: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "1"
    }, "$", mw.html.escape(_LogFilter.msg("highlight-button")))));
    $fieldSet.append(rfSelect, fieldSetInner);
    $pageTop.after($fieldSet);
    this.$body.find("#gadget-log_filter__regex").val(URL_LIFILTER_EXPR !== null && URL_LIFILTER_EXPR !== void 0 ? URL_LIFILTER_EXPR : "");
    this.$body.find("#gadget-log_filter__case").prop("checked", !casing);
    this.$body.find("#gadget-log_filter__invert").prop("checked", inverted);
    this.$body.find("#gadget-log_filter__regex").trigger("focus");
    this.$body.find("#rightsFilter").find("input").on("keyup change", (event) => {
      const $element = $(event.currentTarget);
      if ($element.attr("id") !== "gadget-log_filter__regex") {
        this.filterLi();
        return;
      }
      const curInput = $element.val();
      if (oldInput !== curInput) {
        oldInput = curInput;
        this.filterLi();
      }
    });
    $fieldSet.find("button").on("click", (event) => {
      const $element = $(event.currentTarget);
      this.lastClicked = !!$element.val();
      this.filterLi();
    });
    if (URL_LIFILTER_EXPR) {
      this.filterLi(hilight);
    }
  }
  filterLi(hilight) {
    var _this$$body$find$val$, _this$$body$find$val;
    const $listItems = this.$body.find("#bodyContent").find("li");
    if (!$listItems.length) {
      return;
    }
    hilight = !!(hilight || this.lastClicked.toString() === "1");
    let type;
    if (this.rightsLogOnly) {
      type = this.$body.find("#gadget-log_filter__select").attr("selectedIndex");
    }
    const invert = this.$body.find("#gadget-log_filter__invert").prop("checked");
    const search = (_this$$body$find$val$ = (_this$$body$find$val = this.$body.find("#gadget-log_filter__regex").val()) === null || _this$$body$find$val === void 0 ? void 0 : _this$$body$find$val.toString()) !== null && _this$$body$find$val$ !== void 0 ? _this$$body$find$val$ : "";
    const flags = this.$body.find("#gadget-log_filter__case").prop("checked") ? "ig" : "g";
    let regexRf;
    try {
      regexRf = new RegExp("".concat(search), "".concat(flags));
    } catch (error) {
      console.log(error);
    }
    const REGEX_RIGHT = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;
    var _iterator2 = _createForOfIteratorHelper($listItems), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _look, _look2;
        const element = _step2.value;
        const $element = $(element);
        let look = "";
        if (this.rightsLogOnly) {
          const oldr = $element.text().replace(REGEX_RIGHT, "$1");
          const newr = $element.text().replace(REGEX_RIGHT, "$2");
          const oldrl = oldr.split(", ");
          const newrl = newr.split(", ");
          for (let i = 0; i < oldrl.length; i++) {
            for (let j = 0; j < newrl.length; j++) {
              if (oldrl[i] === newrl[j]) {
                oldrl[i] = "";
                newrl[j] = "";
              }
            }
          }
          const remr = oldrl.join(",");
          const addr = newrl.join(",");
          switch (type) {
            case "0":
              look = addr;
              break;
            case "1":
              look = remr;
              break;
            case "2":
              look = "".concat(remr, " ").concat(addr);
              break;
            case "3":
              look = "".concat(oldr, " ").concat(newr);
              break;
          }
        } else {
          look = $element.text();
        }
        $element.css("background-color", "");
        $element.show();
        if (regexRf && (((_look = look) === null || _look === void 0 ? void 0 : _look.search(regexRf)) === -1 && invert || ((_look2 = look) === null || _look2 === void 0 ? void 0 : _look2.search(regexRf)) !== -1 && !invert)) {
          if (hilight) {
            $element.css("background-color", "#ffff99");
          }
        } else if (!hilight) {
          $element.hide();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  static msg(key) {
    key = "filter-".concat(key);
    return mw.message(key).plain();
  }
};
//! src/LogFilter/modules/constant.ts
var REGEX_TARGET_PAGE = /^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;
//! src/LogFilter/LogFilter.ts
var import_ext_gadget2 = require("ext.gadget.Util");
(function logFilter() {
  const {
    configKey: configKey2
  } = options_exports;
  const {
    wgAction,
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  if (wgAction !== "history" && !mw.util.getParamValue("lifilter") && !REGEX_TARGET_PAGE.test(wgCanonicalSpecialPageName || "")) {
    return;
  }
  void (0, import_ext_gadget2.getBody)().then(($body) => {
    new LogFilter($body).addPortletLink();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgVVJMX0xJRklMVEVSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0NBU0U6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyY2FzZScpO1xuY29uc3QgVVJMX0xJRklMVEVSX0VYUFI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyZXhwcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaGlsaWdodCcpO1xuY29uc3QgVVJMX0xJRklMVEVSX0lOVjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJpbnYnKTtcblxuY2xhc3MgTG9nRmlsdGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSByaWdodHNMb2dPbmx5ID0gbG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdMb2cvcmlnaHRzJyk7XG5cdHByaXZhdGUgbGFzdENsaWNrZWQgPSBmYWxzZTtcblx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHQvLyBEZWZpbmUgaW50ZXJmYWNlIG1lc3NhZ2VzXG5cdFx0bXcubWVzc2FnZXMuc2V0KE1FU1NBR0VTKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRQb3J0bGV0TGluaygpOiB2b2lkIHtcblx0XHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0XHRpZiAocG9ydGxldExpbmspIHtcblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluayk7XG5cdFx0XHQkcG9ydGxldExpbmsuZmluZCgnYScpLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBEaXNwbGF5IGZvcm0gZGlyZWNsdHk/XG5cdFx0aWYgKFVSTF9MSUZJTFRFUiB8fCBVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcblx0XHRjb25zdCAkcGFnZVRvcDogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjY29udGVudFN1YiwgI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Y29uc3QgJGZpZWxkU2V0OiBKUXVlcnkgPSAkKCc8ZmllbGRzZXQ+JykuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJykudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGxldCByZlNlbGVjdCA9IDw+PC8+O1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHJmU2VsZWN0ID0gKFxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdFwiPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgZmllbGRTZXRJbm5lciA9IChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2NoZWNrYm94ZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ludmVydC1sYWJlbCcpKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2Nhc2UtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjBcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdCR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnZmlsdGVyLWJ1dHRvbicpKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzcz17WydjZHgtYnV0dG9uIGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdFx0XHRcdFx0dmFsdWU9XCIxXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2hpZ2hsaWdodC1idXR0b24nKSl9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0XHQvLyBJbmplY3QgdGhlc2UgSFRNTCBlbGVtZW50cyBpbnRvIHRoZSBmaWVsZHNldFxuXHRcdCRmaWVsZFNldC5hcHBlbmQocmZTZWxlY3QsIGZpZWxkU2V0SW5uZXIpO1xuXHRcdCRwYWdlVG9wLmFmdGVyKCRmaWVsZFNldCk7XG5cblx0XHQvLyBTZXQgcGFzc2VkIHZhbHVlc1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnZhbChVUkxfTElGSUxURVJfRVhQUiA/PyAnJyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2UnKS5wcm9wKCdjaGVja2VkJywgIWNhc2luZyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydCcpLnByb3AoJ2NoZWNrZWQnLCBpbnZlcnRlZCk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudHJpZ2dlcignZm9jdXMnKTtcblxuXHRcdC8vIEJpbmQgY2xpY2sgYW5kIGNoYW5nZSBsaXN0ZW5lcnNcblx0XHR0aGlzLiRib2R5XG5cdFx0XHQuZmluZCgnI3JpZ2h0c0ZpbHRlcicpXG5cdFx0XHQuZmluZCgnaW5wdXQnKVxuXHRcdFx0Lm9uKCdrZXl1cCBjaGFuZ2UnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9PSAnZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4Jykge1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY3VySW5wdXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpIGFzIHN0cmluZztcblx0XHRcdFx0aWYgKG9sZElucHV0ICE9PSBjdXJJbnB1dCkge1xuXHRcdFx0XHRcdG9sZElucHV0ID0gY3VySW5wdXQ7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHQkZmllbGRTZXQuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdHRoaXMubGFzdENsaWNrZWQgPSAhISRlbGVtZW50LnZhbCgpO1xuXHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmZpbHRlckxpKGhpbGlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTGkoaGlsaWdodD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBHcmFiIHRoZSBsaXN0IG9mIGFsbCA8bGk+IGluIHRoZSBjb250ZW50XG5cdFx0Y29uc3QgJGxpc3RJdGVtczogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjYm9keUNvbnRlbnQnKS5maW5kKCdsaScpO1xuXHRcdGlmICghJGxpc3RJdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRoaWxpZ2h0ID0gISEoaGlsaWdodCB8fCB0aGlzLmxhc3RDbGlja2VkLnRvU3RyaW5nKCkgPT09ICcxJyk7XG5cblx0XHQvLyBHcmFiIG9wdGlvbnMgZnJvbSBmb3JtXG5cdFx0bGV0IHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHR0eXBlID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdCcpLmF0dHIoJ3NlbGVjdGVkSW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnZlcnQgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0JykucHJvcCgnY2hlY2tlZCcpIGFzIGJvb2xlYW47XG5cdFx0Y29uc3Qgc2VhcmNoOiBzdHJpbmcgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS52YWwoKT8udG9TdHJpbmcoKSA/PyAnJztcblx0XHRjb25zdCBmbGFnczogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2UnKS5wcm9wKCdjaGVja2VkJykgPyAnaWcnIDogJ2cnO1xuXHRcdGxldCByZWdleFJmOiBSZWdFeHAgfCB1bmRlZmluZWQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlZ2V4UmYgPSBuZXcgUmVnRXhwKGAke3NlYXJjaH1gLCBgJHtmbGFnc31gKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSByZWdleCB1c2VkIHRvIGdyYWIgdGhlIFNwZWNpYWw6TG9nL3JpZ2h0cyBjaGFuZ2VzXG5cdFx0Y29uc3QgUkVHRVhfUklHSFQ6IFJlZ0V4cCA9IC9eLio/dXNlcjouKj9cXHNmcm9tXFxzKC4qPylcXHN0b1xccyguKj8pXFxzXFx1MjAwRS4qPyQvaTtcblxuXHRcdC8vIEl0ZXJhdGVcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGxpc3RJdGVtcykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRsZXQgbG9vazogc3RyaW5nID0gJyc7XG5cblx0XHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbDpMb2cvcmlnaHRzXG5cdFx0XHRcdGNvbnN0IG9sZHI6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDEnKTtcblx0XHRcdFx0Y29uc3QgbmV3cjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMicpO1xuXHRcdFx0XHRjb25zdCBvbGRybDogc3RyaW5nW10gPSBvbGRyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRjb25zdCBuZXdybDogc3RyaW5nW10gPSBuZXdyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgb2xkcmwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbmV3cmwubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChvbGRybFtpXSA9PT0gbmV3cmxbal0pIHtcblx0XHRcdFx0XHRcdFx0b2xkcmxbaV0gPSAnJztcblx0XHRcdFx0XHRcdFx0bmV3cmxbal0gPSAnJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVtcjogc3RyaW5nID0gb2xkcmwuam9pbignLCcpO1xuXHRcdFx0XHRjb25zdCBhZGRyOiBzdHJpbmcgPSBuZXdybC5qb2luKCcsJyk7XG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGFkZHI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRcdGxvb2sgPSByZW1yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMic6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7cmVtcn0gJHthZGRyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICczJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtvbGRyfSAke25ld3J9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBBbnkgb3RoZXIgbGlzdCBvZiA8bGk+IG9iamVjdHNcblx0XHRcdFx0bG9vayA9ICRlbGVtZW50LnRleHQoKTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJycpO1xuXHRcdFx0JGVsZW1lbnQuc2hvdygpO1xuXG5cdFx0XHRpZiAocmVnZXhSZiAmJiAoKGxvb2s/LnNlYXJjaChyZWdleFJmKSA9PT0gLTEgJiYgaW52ZXJ0KSB8fCAobG9vaz8uc2VhcmNoKHJlZ2V4UmYpICE9PSAtMSAmJiAhaW52ZXJ0KSkpIHtcblx0XHRcdFx0aWYgKGhpbGlnaHQpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZmY5OScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFoaWxpZ2h0KSB7XG5cdFx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGtleSA9IGBmaWx0ZXItJHtrZXl9YDtcblx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xuXHR9XG59XG5cbmV4cG9ydCB7TG9nRmlsdGVyfTtcbiIsICJjb25zdCBSRUdFWF9UQVJHRVRfUEFHRTogUmVnRXhwID1cblx0L14oPzphY3RpdmV1c2Vyc3xjaGVja3VzZXJ8Y29udHJpYnV0aW9uc3xpcGJsb2NrbGlzdHxsaW5rc2VhcmNofGxvZ3xzZWFyY2h8KD86dW5jYXRlZ29yaXp8dW51c3x3YW50KWVkKD86Y2F0ZWdvcml8dGVtcGxhdCllc3x3YW50ZWRmaWxlc3woPzpzaG9ydHxsb25nfGFuY2llbnR8dW5jYXRlZ29yaXplZHx1bndhdGNoZWR8d2FudGVkfHByb3RlY3RlZHxkZWFkZW5kfGxvbmVseXxuZXcpcGFnZXN8ZmV3ZXN0cmV2aXNpb25zfHdpdGhvdXRpbnRlcndpa2l8KD86ZG91YmxlfGJyb2tlbilyZWRpcmVjdHN8cHJvdGVjdGVkdGl0bGVzfGNyb3NzbmFtZXNwYWNlbGlua3N8cmVjZW50Y2hhbmdlc3xjYXRlZ29yaWVzfGRpc2FtYmlndWF0aW9uc3xsaXN0cmVkaXJlY3RzfGdsb2JhbHVzZXJzfGdsb2JhbGJsb2NrbGlzdHxsaXN0dXNlcnN8d2F0Y2hsaXN0fG1vc3QoPzpsaW5rZWR8cmV2aXNpb25zfGNhdGVnb3JpZXMpfG51a2V8d2hhdGxpbmtzaGVyZSkkL2k7XG5cbmV4cG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9O1xuIiwgIi8qKlxuICogTG9nIGZpbHRlciBzY3JpcHRcbiAqXG4gKiBDcmVhdGVkIGJ5IFNwbGFya2FcbiAqIEFtZW5kZWQgYnkgTWlrZS5saWZlZ3VhcmQgJiBMdXBvXG4gKiBQYXJ0aWFsbHkgcmV3cml0dGVuIGJ5IERpZUJ1Y2hlXG4gKlxuICogPGxpPiBlbGVtZW50IEZpbHRlciBTY3JpcHQsIHZlcnNpb24gWzAuMl1cbiAqIFNob3VsZCBjdXJyZW50bHkgd29yayBvbiBhbGwga25vd24gc2tpbnMgKHdpdGggYSAjY29udGVudFN1YiBvciAjdG9wYmFyKVxuICpcbiAqIG13LnV0aWwuZ2V0VXJsKCBtdy5jb25maWcuZ2V0KCAnd2dQYWdlTmFtZScgKSApICsgJz8nICtcbiAqICd3aXRoSlM9TWVkaWFXaWtpOkdhZGdldC1Mb2dGaWx0ZXIuanMmbGlmaWx0ZXI9MSZsaWZpbHRlcmV4cHI9VEVTVCZsaWZpbHRlcmNhc2UmbGlmaWx0ZXJoaWxpZ2h0JmxpZmlsdGVyaW52J1xuICovXG5pbXBvcnQgJy4vTG9nRmlsdGVyLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xvZ0ZpbHRlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtSRUdFWF9UQVJHRVRfUEFHRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIGxvZ0ZpbHRlcigpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBXaGVuIHRvIGVuYWJsZSBhbGwgdGhpc1xuXHRpZiAoXG5cdFx0d2dBY3Rpb24gIT09ICdoaXN0b3J5JyAmJlxuXHRcdCFtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJykgJiZcblx0XHQhUkVHRVhfVEFSR0VUX1BBR0UudGVzdCh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0bmV3IExvZ0ZpbHRlcigkYm9keSkuYWRkUG9ydGxldExpbmsoKTsgLy8gTG9hZFxuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFD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LElBQUk7QUFHN0IsTUFDQ0MsYUFBYSxhQUNiLENBQUMzRyxHQUFHQyxLQUFLQyxjQUFjLFVBQVUsS0FDakMsQ0FBQ3FHLGtCQUFrQlEsS0FBS0gsOEJBQThCLEVBQUUsR0FDdkQ7QUFDRDtFQUNEO0FBRUEsUUFBQSxHQUFLSixtQkFBQVEsU0FBUSxFQUFFQyxLQUFNbkcsV0FBeUM7QUFDN0QsUUFBSVAsVUFBVU8sS0FBSyxFQUFFSSxlQUFlO0VBQ3JDLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJvcHRpb25zX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY29uZmlnS2V5IiwgImRlZmF1bHQiLCAib3B0aW9uc19kZWZhdWx0IiwgIk1FU1NBR0VTIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJVUkxfTElGSUxURVIiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9MSUZJTFRFUl9DQVNFIiwgIlVSTF9MSUZJTFRFUl9FWFBSIiwgIlVSTF9MSUZJTFRFUl9ISUxJR0hUIiwgIlVSTF9MSUZJTFRFUl9JTlYiLCAiTG9nRmlsdGVyIiwgIl9Mb2dGaWx0ZXIiLCAicmlnaHRzTG9nT25seSIsICJsb2NhdGlvbiIsICJocmVmIiwgImluY2x1ZGVzIiwgImxhc3RDbGlja2VkIiwgIiRib2R5IiwgImNvbnN0cnVjdG9yIiwgIm1lc3NhZ2VzIiwgInNldCIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJmaW5kIiwgImxlbmd0aCIsICJtc2ciLCAiJHBvcnRsZXRMaW5rIiwgIiQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYnVpbGRGb3JtIiwgIiRwYWdlVG9wIiwgIm9sZElucHV0IiwgImluc3RydWN0aW9ucyIsICJoaWRlIiwgImNhc2luZyIsICJoaWxpZ2h0IiwgImludmVydGVkIiwgIiRmaWVsZFNldCIsICJhdHRyIiwgInRleHQiLCAiJGxlZ2VuZCIsICJhcHBlbmQiLCAicmZTZWxlY3QiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJpZCIsICJodG1sIiwgImVzY2FwZSIsICJmaWVsZFNldElubmVyIiwgImNsYXNzIiwgImh0bWxGb3IiLCAidHlwZSIsICJ2YWx1ZSIsICJhZnRlciIsICJ2YWwiLCAicHJvcCIsICJ0cmlnZ2VyIiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAiZmlsdGVyTGkiLCAiY3VySW5wdXQiLCAiX3RoaXMkJGJvZHkkZmluZCR2YWwkIiwgIl90aGlzJCRib2R5JGZpbmQkdmFsIiwgIiRsaXN0SXRlbXMiLCAidG9TdHJpbmciLCAiaW52ZXJ0IiwgInNlYXJjaCIsICJmbGFncyIsICJyZWdleFJmIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJsb2ciLCAiUkVHRVhfUklHSFQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX2xvb2siLCAiX2xvb2syIiwgImVsZW1lbnQiLCAibG9vayIsICJvbGRyIiwgInJlcGxhY2UiLCAibmV3ciIsICJvbGRybCIsICJzcGxpdCIsICJuZXdybCIsICJpIiwgImoiLCAicmVtciIsICJqb2luIiwgImFkZHIiLCAiY3NzIiwgInNob3ciLCAiZXJyIiwgImUiLCAiZiIsICJrZXkiLCAibWVzc2FnZSIsICJwbGFpbiIsICJSRUdFWF9UQVJHRVRfUEFHRSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibG9nRmlsdGVyIiwgImNvbmZpZ0tleTIiLCAid2dBY3Rpb24iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJ0ZXN0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K

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
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
    }, mw.html.escape(_LogFilter.msg("filter-button"))), /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      class: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "1"
    }, mw.html.escape(_LogFilter.msg("highlight-button")))));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgVVJMX0xJRklMVEVSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0NBU0U6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyY2FzZScpO1xuY29uc3QgVVJMX0xJRklMVEVSX0VYUFI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyZXhwcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaGlsaWdodCcpO1xuY29uc3QgVVJMX0xJRklMVEVSX0lOVjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJpbnYnKTtcblxuY2xhc3MgTG9nRmlsdGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSByaWdodHNMb2dPbmx5ID0gbG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdMb2cvcmlnaHRzJyk7XG5cdHByaXZhdGUgbGFzdENsaWNrZWQgPSBmYWxzZTtcblx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHQvLyBEZWZpbmUgaW50ZXJmYWNlIG1lc3NhZ2VzXG5cdFx0bXcubWVzc2FnZXMuc2V0KE1FU1NBR0VTKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRQb3J0bGV0TGluaygpOiB2b2lkIHtcblx0XHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0XHRpZiAocG9ydGxldExpbmspIHtcblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluayk7XG5cdFx0XHQkcG9ydGxldExpbmsuZmluZCgnYScpLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBEaXNwbGF5IGZvcm0gZGlyZWNsdHk/XG5cdFx0aWYgKFVSTF9MSUZJTFRFUiB8fCBVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcblx0XHRjb25zdCAkcGFnZVRvcDogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjY29udGVudFN1YiwgI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Y29uc3QgJGZpZWxkU2V0OiBKUXVlcnkgPSAkKCc8ZmllbGRzZXQ+JykuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJykudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGxldCByZlNlbGVjdCA9IDw+PC8+O1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHJmU2VsZWN0ID0gKFxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdFwiPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgZmllbGRTZXRJbm5lciA9IChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2NoZWNrYm94ZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ludmVydC1sYWJlbCcpKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2Nhc2UtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjBcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdmaWx0ZXItYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdoaWdobGlnaHQtYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdFx0Ly8gSW5qZWN0IHRoZXNlIEhUTUwgZWxlbWVudHMgaW50byB0aGUgZmllbGRzZXRcblx0XHQkZmllbGRTZXQuYXBwZW5kKHJmU2VsZWN0LCBmaWVsZFNldElubmVyKTtcblx0XHQkcGFnZVRvcC5hZnRlcigkZmllbGRTZXQpO1xuXG5cdFx0Ly8gU2V0IHBhc3NlZCB2YWx1ZXNcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS52YWwoVVJMX0xJRklMVEVSX0VYUFIgPz8gJycpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcsICFjYXNpbmcpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19pbnZlcnQnKS5wcm9wKCdjaGVja2VkJywgaW52ZXJ0ZWQpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cblx0XHQvLyBCaW5kIGNsaWNrIGFuZCBjaGFuZ2UgbGlzdGVuZXJzXG5cdFx0dGhpcy4kYm9keVxuXHRcdFx0LmZpbmQoJyNyaWdodHNGaWx0ZXInKVxuXHRcdFx0LmZpbmQoJ2lucHV0Jylcblx0XHRcdC5vbigna2V5dXAgY2hhbmdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPT0gJ2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpIHtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1cklucHV0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmIChvbGRJbnB1dCAhPT0gY3VySW5wdXQpIHtcblx0XHRcdFx0XHRvbGRJbnB1dCA9IGN1cklucHV0O1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0JGZpZWxkU2V0LmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHR0aGlzLmxhc3RDbGlja2VkID0gISEkZWxlbWVudC52YWwoKTtcblx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHR9KTtcblxuXHRcdGlmIChVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5maWx0ZXJMaShoaWxpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckxpKGhpbGlnaHQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gR3JhYiB0aGUgbGlzdCBvZiBhbGwgPGxpPiBpbiB0aGUgY29udGVudFxuXHRcdGNvbnN0ICRsaXN0SXRlbXM6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2JvZHlDb250ZW50JykuZmluZCgnbGknKTtcblx0XHRpZiAoISRsaXN0SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aGlsaWdodCA9ICEhKGhpbGlnaHQgfHwgdGhpcy5sYXN0Q2xpY2tlZC50b1N0cmluZygpID09PSAnMScpO1xuXG5cdFx0Ly8gR3JhYiBvcHRpb25zIGZyb20gZm9ybVxuXHRcdGxldCB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0dHlwZSA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19zZWxlY3QnKS5hdHRyKCdzZWxlY3RlZEluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52ZXJ0ID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydCcpLnByb3AoJ2NoZWNrZWQnKSBhcyBib29sZWFuO1xuXHRcdGNvbnN0IHNlYXJjaDogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudmFsKCk/LnRvU3RyaW5nKCkgPz8gJyc7XG5cdFx0Y29uc3QgZmxhZ3M6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcpID8gJ2lnJyA6ICdnJztcblx0XHRsZXQgcmVnZXhSZjogUmVnRXhwIHwgdW5kZWZpbmVkO1xuXHRcdHRyeSB7XG5cdFx0XHRyZWdleFJmID0gbmV3IFJlZ0V4cChgJHtzZWFyY2h9YCwgYCR7ZmxhZ3N9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcmVnZXggdXNlZCB0byBncmFiIHRoZSBTcGVjaWFsOkxvZy9yaWdodHMgY2hhbmdlc1xuXHRcdGNvbnN0IFJFR0VYX1JJR0hUOiBSZWdFeHAgPSAvXi4qP3VzZXI6Lio/XFxzZnJvbVxccyguKj8pXFxzdG9cXHMoLio/KVxcc1xcdTIwMEUuKj8kL2k7XG5cblx0XHQvLyBJdGVyYXRlXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdC8vIFNwZWNpYWw6TG9nL3JpZ2h0c1xuXHRcdFx0XHRjb25zdCBvbGRyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQxJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3I6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDInKTtcblx0XHRcdFx0Y29uc3Qgb2xkcmw6IHN0cmluZ1tdID0gb2xkci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Y29uc3QgbmV3cmw6IHN0cmluZ1tdID0gbmV3ci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG9sZHJsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5ld3JsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkcmxbaV0gPT09IG5ld3JsW2pdKSB7XG5cdFx0XHRcdFx0XHRcdG9sZHJsW2ldID0gJyc7XG5cdFx0XHRcdFx0XHRcdG5ld3JsW2pdID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHJlbXI6IHN0cmluZyA9IG9sZHJsLmpvaW4oJywnKTtcblx0XHRcdFx0Y29uc3QgYWRkcjogc3RyaW5nID0gbmV3cmwuam9pbignLCcpO1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBhZGRyO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0XHRsb29rID0gcmVtcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke3JlbXJ9ICR7YWRkcn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMyc6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7b2xkcn0gJHtuZXdyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW55IG90aGVyIGxpc3Qgb2YgPGxpPiBvYmplY3RzXG5cdFx0XHRcdGxvb2sgPSAkZWxlbWVudC50ZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdCRlbGVtZW50LnNob3coKTtcblxuXHRcdFx0aWYgKHJlZ2V4UmYgJiYgKChsb29rPy5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2s/LnNlYXJjaChyZWdleFJmKSAhPT0gLTEgJiYgIWludmVydCkpKSB7XG5cdFx0XHRcdGlmIChoaWxpZ2h0KSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmOTknKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGlsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHJldHVybiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcblx0fVxufVxuXG5leHBvcnQge0xvZ0ZpbHRlcn07XG4iLCAiY29uc3QgUkVHRVhfVEFSR0VUX1BBR0U6IFJlZ0V4cCA9XG5cdC9eKD86YWN0aXZldXNlcnN8Y2hlY2t1c2VyfGNvbnRyaWJ1dGlvbnN8aXBibG9ja2xpc3R8bGlua3NlYXJjaHxsb2d8c2VhcmNofCg/OnVuY2F0ZWdvcml6fHVudXN8d2FudCllZCg/OmNhdGVnb3JpfHRlbXBsYXQpZXN8d2FudGVkZmlsZXN8KD86c2hvcnR8bG9uZ3xhbmNpZW50fHVuY2F0ZWdvcml6ZWR8dW53YXRjaGVkfHdhbnRlZHxwcm90ZWN0ZWR8ZGVhZGVuZHxsb25lbHl8bmV3KXBhZ2VzfGZld2VzdHJldmlzaW9uc3x3aXRob3V0aW50ZXJ3aWtpfCg/OmRvdWJsZXxicm9rZW4pcmVkaXJlY3RzfHByb3RlY3RlZHRpdGxlc3xjcm9zc25hbWVzcGFjZWxpbmtzfHJlY2VudGNoYW5nZXN8Y2F0ZWdvcmllc3xkaXNhbWJpZ3VhdGlvbnN8bGlzdHJlZGlyZWN0c3xnbG9iYWx1c2Vyc3xnbG9iYWxibG9ja2xpc3R8bGlzdHVzZXJzfHdhdGNobGlzdHxtb3N0KD86bGlua2VkfHJldmlzaW9uc3xjYXRlZ29yaWVzKXxudWtlfHdoYXRsaW5rc2hlcmUpJC9pO1xuXG5leHBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfTtcbiIsICIvKipcbiAqIExvZyBmaWx0ZXIgc2NyaXB0XG4gKlxuICogQ3JlYXRlZCBieSBTcGxhcmthXG4gKiBBbWVuZGVkIGJ5IE1pa2UubGlmZWd1YXJkICYgTHVwb1xuICogUGFydGlhbGx5IHJld3JpdHRlbiBieSBEaWVCdWNoZVxuICpcbiAqIDxsaT4gZWxlbWVudCBGaWx0ZXIgU2NyaXB0LCB2ZXJzaW9uIFswLjJdXG4gKiBTaG91bGQgY3VycmVudGx5IHdvcmsgb24gYWxsIGtub3duIHNraW5zICh3aXRoIGEgI2NvbnRlbnRTdWIgb3IgI3RvcGJhcilcbiAqXG4gKiBtdy51dGlsLmdldFVybCggbXcuY29uZmlnLmdldCggJ3dnUGFnZU5hbWUnICkgKSArICc/JyArXG4gKiAnd2l0aEpTPU1lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJmxpZmlsdGVyPTEmbGlmaWx0ZXJleHByPVRFU1QmbGlmaWx0ZXJjYXNlJmxpZmlsdGVyaGlsaWdodCZsaWZpbHRlcmludidcbiAqL1xuaW1wb3J0ICcuL0xvZ0ZpbHRlci5sZXNzJztcbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtMb2dGaWx0ZXJ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBsb2dGaWx0ZXIoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gV2hlbiB0byBlbmFibGUgYWxsIHRoaXNcblx0aWYgKFxuXHRcdHdnQWN0aW9uICE9PSAnaGlzdG9yeScgJiZcblx0XHQhbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpICYmXG5cdFx0IVJFR0VYX1RBUkdFVF9QQUdFLnRlc3Qod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgfHwgJycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdG5ldyBMb2dGaWx0ZXIoJGJvZHkpLmFkZFBvcnRsZXRMaW5rKCk7IC8vIExvYWRcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFNRyxXQUFXO0VBQ2hCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzVCOztBQ2ZBLElBQUFDLG9CQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFFbEIsSUFBTUMsZUFBOEJDLEdBQUdDLEtBQUtDLGNBQWMsVUFBVTtBQUNwRSxJQUFNQyxvQkFBbUNILEdBQUdDLEtBQUtDLGNBQWMsY0FBYztBQUM3RSxJQUFNRSxvQkFBbUNKLEdBQUdDLEtBQUtDLGNBQWMsY0FBYztBQUM3RSxJQUFNRyx1QkFBc0NMLEdBQUdDLEtBQUtDLGNBQWMsaUJBQWlCO0FBQ25GLElBQU1JLG1CQUFrQ04sR0FBR0MsS0FBS0MsY0FBYyxhQUFhO0FBRTNFLElBQU1LLFlBQU4sTUFBTUMsV0FBVTtFQUNFQyxnQkFBZ0JDLFNBQVNDLEtBQUtDLFNBQVMsYUFBYSxLQUFLRixTQUFTQyxLQUFLQyxTQUFTLFlBQVk7RUFDckdDLGNBQWM7RUFDZEM7RUFFREMsWUFBWUQsT0FBZ0M7QUFDbEQsU0FBS0EsUUFBUUE7QUFFYmQsT0FBR2dCLFNBQVNDLElBQUl0QixRQUFRO0VBQ3pCO0VBRU91QixpQkFBdUI7QUFFN0IsVUFBTUMsY0FBb0NuQixHQUFHQyxLQUFLaUIsZUFDakQsS0FBS0osTUFBTU0sS0FBSyxhQUFhLEVBQUVDLFNBQVMsZUFBZSxRQUN2RCxLQUNBYixXQUFVYyxJQUFJLGNBQWMsR0FDNUIsZUFDQWQsV0FBVWMsSUFBSSxxQkFBcUIsQ0FDcEM7QUFFQSxRQUFJSCxhQUFhO0FBQ2hCLFlBQU1JLGVBQXVCQyxFQUFFTCxXQUFXO0FBQzFDSSxtQkFBYUgsS0FBSyxHQUFHLEVBQUVLLEdBQUcsU0FBVUMsV0FBbUM7QUFDdEVBLGNBQU1DLGVBQWU7QUFDckIsYUFBS0MsVUFBVTtNQUNoQixDQUFDO0lBQ0Y7QUFFQSxRQUFJN0IsZ0JBQWdCSyxtQkFBbUI7QUFDdEMsV0FBS3dCLFVBQVU7SUFDaEI7RUFDRDtFQUVRQSxZQUFrQjtBQUN6QixVQUFNQyxXQUFtQixLQUFLZixNQUFNTSxLQUFLLHNCQUFzQjtBQUMvRCxRQUFJLENBQUNTLFNBQVNSLFFBQVE7QUFDckI7SUFDRDtBQUVBLFFBQUlTLFdBQW1CO0FBQ3ZCLFVBQU1DLGVBQXVCLEtBQUt0QixnQkFDL0JELFdBQVVjLElBQUksMEJBQTBCLElBQ3hDZCxXQUFVYyxJQUFJLHlCQUF5QjtBQUUxQyxTQUFLUixNQUFNTSxLQUFLLGNBQWMsRUFBRVksS0FBSztBQUdyQyxVQUFNQyxTQUFrQjlCLHNCQUFzQjtBQUM5QyxVQUFNK0IsVUFBbUI3Qix5QkFBeUI7QUFDbEQsVUFBTThCLFdBQW9CN0IscUJBQXFCO0FBRy9DLFVBQU04QixZQUFvQlosRUFBRSxZQUFZLEVBQUVhLEtBQUssTUFBTSxjQUFjLEVBQUVDLEtBQUtQLFlBQVk7QUFDdEYsVUFBTVEsVUFBa0JmLEVBQUUsVUFBVSxFQUFFYyxLQUFLOUIsV0FBVWMsSUFBSSxRQUFRLENBQUM7QUFDbEVjLGNBQVVJLE9BQU9ELE9BQU87QUFFeEIsUUFBSUUsV0FBVzdDLGtDQUFBSCxRQUFBaUQsY0FBQTlDLGtCQUFBSCxRQUFBa0QsVUFBQSxJQUFFO0FBQ2pCLFFBQUksS0FBS2xDLGVBQWU7QUFDdkJnQyxpQkFDQzdDLGtDQUFBSCxRQUFBaUQsY0FBQyxVQUFBO1FBQU9FLElBQUc7TUFBQSxHQUNWaEQsa0NBQUFILFFBQUFpRCxjQUFDLFVBQUEsTUFBUTFDLEdBQUc2QyxLQUFLQyxPQUFPdEMsV0FBVWMsSUFBSSxjQUFjLENBQUMsQ0FBRSxHQUN2RDFCLGtDQUFBSCxRQUFBaUQsY0FBQyxVQUFBLE1BQVExQyxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUksZ0JBQWdCLENBQUMsQ0FBRSxHQUN6RDFCLGtDQUFBSCxRQUFBaUQsY0FBQyxVQUFBLE1BQVExQyxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUkseUJBQXlCLENBQUMsQ0FBRSxHQUNsRTFCLGtDQUFBSCxRQUFBaUQsY0FBQyxVQUFBLE1BQVExQyxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUksNkJBQTZCLENBQUMsQ0FBRSxDQUN2RTtJQUVGO0FBQ0EsVUFBTXlCLGdCQUNMbkQsa0NBQUFILFFBQUFpRCxjQUFBOUMsa0JBQUFILFFBQUFrRCxVQUFBLE1BQ0MvQyxrQ0FBQUgsUUFBQWlELGNBQUMsT0FBQTtNQUFJTSxPQUFNO0lBQUEsR0FDVnBELGtDQUFBSCxRQUFBaUQsY0FBQyxTQUFBO01BQU1PLFNBQVE7SUFBQSxHQUE0QmpELEdBQUc2QyxLQUFLQyxPQUFPdEMsV0FBVWMsSUFBSSxhQUFhLENBQUMsQ0FBRSxHQUN4RjFCLGtDQUFBSCxRQUFBaUQsY0FBQyxTQUFBO01BQU1FLElBQUc7SUFBQSxDQUEyQixDQUN0QyxHQUNBaEQsa0NBQUFILFFBQUFpRCxjQUFDLE9BQUE7TUFBSU0sT0FBTTtJQUFBLEdBQ1ZwRCxrQ0FBQUgsUUFBQWlELGNBQUMsT0FBQTtNQUFJTSxPQUFNO0lBQUEsR0FDVnBELGtDQUFBSCxRQUFBaUQsY0FBQyxTQUFBO01BQU1FLElBQUc7TUFBNEJNLE1BQUs7SUFBQSxDQUFXLEdBQ3REdEQsa0NBQUFILFFBQUFpRCxjQUFDLFNBQUE7TUFBTU8sU0FBUTtJQUFBLEdBQ2JqRCxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUksY0FBYyxDQUFDLENBQzlDLENBQ0QsR0FDQTFCLGtDQUFBSCxRQUFBaUQsY0FBQyxPQUFBO01BQUlNLE9BQU07SUFBQSxHQUNWcEQsa0NBQUFILFFBQUFpRCxjQUFDLFNBQUE7TUFBTUUsSUFBRztNQUEwQk0sTUFBSztJQUFBLENBQVcsR0FDcER0RCxrQ0FBQUgsUUFBQWlELGNBQUMsU0FBQTtNQUFNTyxTQUFRO0lBQUEsR0FBMkJqRCxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUksWUFBWSxDQUFDLENBQUUsQ0FDdkYsQ0FDRCxHQUNBMUIsa0NBQUFILFFBQUFpRCxjQUFDLE9BQUE7TUFBSU0sT0FBTTtJQUFBLEdBQ1ZwRCxrQ0FBQUgsUUFBQWlELGNBQUMsVUFBQTtNQUNBTSxPQUFPLENBQUMsNkNBQTZDLDRCQUE0QjtNQUNqRkcsT0FBTTtJQUFBLEdBRUxuRCxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUksZUFBZSxDQUFDLENBQy9DLEdBQ0ExQixrQ0FBQUgsUUFBQWlELGNBQUMsVUFBQTtNQUNBTSxPQUFPLENBQUMsNkNBQTZDLDRCQUE0QjtNQUNqRkcsT0FBTTtJQUFBLEdBRUxuRCxHQUFHNkMsS0FBS0MsT0FBT3RDLFdBQVVjLElBQUksa0JBQWtCLENBQUMsQ0FDbEQsQ0FDRCxDQUNEO0FBR0RjLGNBQVVJLE9BQU9DLFVBQVVNLGFBQWE7QUFDeENsQixhQUFTdUIsTUFBTWhCLFNBQVM7QUFHeEIsU0FBS3RCLE1BQU1NLEtBQUssMkJBQTJCLEVBQUVpQyxJQUFJakQsc0JBQUEsUUFBQUEsc0JBQUEsU0FBQUEsb0JBQXFCLEVBQUU7QUFDeEUsU0FBS1UsTUFBTU0sS0FBSywwQkFBMEIsRUFBRWtDLEtBQUssV0FBVyxDQUFDckIsTUFBTTtBQUNuRSxTQUFLbkIsTUFBTU0sS0FBSyw0QkFBNEIsRUFBRWtDLEtBQUssV0FBV25CLFFBQVE7QUFDdEUsU0FBS3JCLE1BQU1NLEtBQUssMkJBQTJCLEVBQUVtQyxRQUFRLE9BQU87QUFHNUQsU0FBS3pDLE1BQ0hNLEtBQUssZUFBZSxFQUNwQkEsS0FBSyxPQUFPLEVBQ1pLLEdBQUcsZ0JBQWlCQyxXQUFnQjtBQUNwQyxZQUFNOEIsV0FBbUJoQyxFQUFFRSxNQUFNK0IsYUFBYTtBQUM5QyxVQUFJRCxTQUFTbkIsS0FBSyxJQUFJLE1BQU0sNEJBQTRCO0FBQ3ZELGFBQUtxQixTQUFTO0FBQ2Q7TUFDRDtBQUNBLFlBQU1DLFdBQW1CSCxTQUFTSCxJQUFJO0FBQ3RDLFVBQUl2QixhQUFhNkIsVUFBVTtBQUMxQjdCLG1CQUFXNkI7QUFDWCxhQUFLRCxTQUFTO01BQ2Y7SUFDRCxDQUFDO0FBQ0Z0QixjQUFVaEIsS0FBSyxRQUFRLEVBQUVLLEdBQUcsU0FBVUMsV0FBZ0I7QUFDckQsWUFBTThCLFdBQW1CaEMsRUFBRUUsTUFBTStCLGFBQWE7QUFDOUMsV0FBSzVDLGNBQWMsQ0FBQyxDQUFDMkMsU0FBU0gsSUFBSTtBQUNsQyxXQUFLSyxTQUFTO0lBQ2YsQ0FBQztBQUVELFFBQUl0RCxtQkFBbUI7QUFDdEIsV0FBS3NELFNBQVN4QixPQUFPO0lBQ3RCO0VBQ0Q7RUFFUXdCLFNBQVN4QixTQUF5QjtBQUFBLFFBQUEwQix1QkFBQUM7QUFFekMsVUFBTUMsYUFBcUIsS0FBS2hELE1BQU1NLEtBQUssY0FBYyxFQUFFQSxLQUFLLElBQUk7QUFDcEUsUUFBSSxDQUFDMEMsV0FBV3pDLFFBQVE7QUFDdkI7SUFDRDtBQUVBYSxjQUFVLENBQUMsRUFBRUEsV0FBVyxLQUFLckIsWUFBWWtELFNBQVMsTUFBTTtBQUd4RCxRQUFJYjtBQUNKLFFBQUksS0FBS3pDLGVBQWU7QUFDdkJ5QyxhQUFPLEtBQUtwQyxNQUFNTSxLQUFLLDRCQUE0QixFQUFFaUIsS0FBSyxlQUFlO0lBQzFFO0FBRUEsVUFBTTJCLFNBQVMsS0FBS2xELE1BQU1NLEtBQUssNEJBQTRCLEVBQUVrQyxLQUFLLFNBQVM7QUFDM0UsVUFBTVcsVUFBQUwseUJBQUFDLHVCQUFpQixLQUFLL0MsTUFBTU0sS0FBSywyQkFBMkIsRUFBRWlDLElBQUksT0FBQSxRQUFBUSx5QkFBQSxTQUFBLFNBQWpEQSxxQkFBb0RFLFNBQVMsT0FBQSxRQUFBSCwwQkFBQSxTQUFBQSx3QkFBSztBQUN6RixVQUFNTSxRQUFnQixLQUFLcEQsTUFBTU0sS0FBSywwQkFBMEIsRUFBRWtDLEtBQUssU0FBUyxJQUFJLE9BQU87QUFDM0YsUUFBSWE7QUFDSixRQUFJO0FBQ0hBLGdCQUFVLElBQUlDLE9BQUEsR0FBQUMsT0FBVUosTUFBTSxHQUFBLEdBQUFJLE9BQU9ILEtBQUssQ0FBRTtJQUM3QyxTQUFTSSxPQUFPO0FBQ2ZDLGNBQVFDLElBQUlGLEtBQUs7SUFDbEI7QUFHQSxVQUFNRyxjQUFzQjtBQUFBLFFBQUFDLGFBQUFDLDJCQUdOYixVQUFBLEdBQUFjO0FBQUEsUUFBQTtBQUF0QixXQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUFrQztBQUFBLFlBQUFDLE9BQUFDO0FBQUEsY0FBdkJDLFVBQUFOLE9BQUF6QjtBQUNWLGNBQU1LLFdBQW1CaEMsRUFBRTBELE9BQU87QUFDbEMsWUFBSUMsT0FBZTtBQUVuQixZQUFJLEtBQUsxRSxlQUFlO0FBRXZCLGdCQUFNMkUsT0FBZTVCLFNBQVNsQixLQUFLLEVBQUUrQyxRQUFRWixhQUFhLElBQUk7QUFDOUQsZ0JBQU1hLE9BQWU5QixTQUFTbEIsS0FBSyxFQUFFK0MsUUFBUVosYUFBYSxJQUFJO0FBQzlELGdCQUFNYyxRQUFrQkgsS0FBS0ksTUFBTSxJQUFJO0FBQ3ZDLGdCQUFNQyxRQUFrQkgsS0FBS0UsTUFBTSxJQUFJO0FBQ3ZDLG1CQUFTRSxJQUFZLEdBQUdBLElBQUlILE1BQU1sRSxRQUFRcUUsS0FBSztBQUM5QyxxQkFBU0MsSUFBWSxHQUFHQSxJQUFJRixNQUFNcEUsUUFBUXNFLEtBQUs7QUFDOUMsa0JBQUlKLE1BQU1HLENBQUMsTUFBTUQsTUFBTUUsQ0FBQyxHQUFHO0FBQzFCSixzQkFBTUcsQ0FBQyxJQUFJO0FBQ1hELHNCQUFNRSxDQUFDLElBQUk7Y0FDWjtZQUNEO1VBQ0Q7QUFDQSxnQkFBTUMsT0FBZUwsTUFBTU0sS0FBSyxHQUFHO0FBQ25DLGdCQUFNQyxPQUFlTCxNQUFNSSxLQUFLLEdBQUc7QUFDbkMsa0JBQVEzQyxNQUFBO1lBQ1AsS0FBSztBQUNKaUMscUJBQU9XO0FBQ1A7WUFDRCxLQUFLO0FBQ0pYLHFCQUFPUztBQUNQO1lBQ0QsS0FBSztBQUNKVCxxQkFBQSxHQUFBZCxPQUFVdUIsTUFBSSxHQUFBLEVBQUF2QixPQUFJeUIsSUFBSTtBQUN0QjtZQUNELEtBQUs7QUFDSlgscUJBQUEsR0FBQWQsT0FBVWUsTUFBSSxHQUFBLEVBQUFmLE9BQUlpQixJQUFJO0FBQ3RCO1VBQ0Y7UUFDRCxPQUFPO0FBRU5ILGlCQUFPM0IsU0FBU2xCLEtBQUs7UUFDdEI7QUFFQWtCLGlCQUFTdUMsSUFBSSxvQkFBb0IsRUFBRTtBQUNuQ3ZDLGlCQUFTd0MsS0FBSztBQUVkLFlBQUk3QixjQUFhYSxRQUFBRyxVQUFBLFFBQUFILFVBQUEsU0FBQSxTQUFBQSxNQUFNZixPQUFPRSxPQUFPLE9BQU0sTUFBTUgsWUFBWWlCLFNBQUFFLFVBQUEsUUFBQUYsV0FBQSxTQUFBLFNBQUFBLE9BQU1oQixPQUFPRSxPQUFPLE9BQU0sTUFBTSxDQUFDSCxTQUFVO0FBQ3ZHLGNBQUk5QixTQUFTO0FBQ1pzQixxQkFBU3VDLElBQUksb0JBQW9CLFNBQVM7VUFDM0M7UUFDRCxXQUFXLENBQUM3RCxTQUFTO0FBQ3BCc0IsbUJBQVN4QixLQUFLO1FBQ2Y7TUFDRDtJQUFBLFNBQUFpRSxLQUFBO0FBQUF2QixpQkFBQXdCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUF2QixpQkFBQXlCLEVBQUE7SUFBQTtFQUNEO0VBRUEsT0FBZTdFLElBQUk4RSxLQUFxQjtBQUN2Q0EsVUFBQSxVQUFBL0IsT0FBZ0IrQixHQUFHO0FBSW5CLFdBQU9wRyxHQUFHcUcsUUFBUUQsR0FBRyxFQUFFRSxNQUFNO0VBQzlCO0FBQ0Q7O0FDNU9BLElBQU1DLG9CQUNMOztBQ2dCRCxJQUFBQyxxQkFBc0IxRyxRQUFBLGlCQUFBO0NBRXJCLFNBQVMyRyxZQUFrQjtBQUMzQixRQUFNO0lBQUNqSCxXQUFBa0g7RUFBUyxJQUFJcEg7QUFDcEIsUUFBTTtJQUFDcUg7SUFBVUM7RUFBMEIsSUFBSTVHLEdBQUc2RyxPQUFPQyxJQUFJO0FBRzdELE1BQUk5RyxHQUFHNkcsT0FBT0MsSUFBSUosVUFBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTFHLEtBQUc2RyxPQUFPNUYsSUFBSXlGLFlBQVcsSUFBSTtBQUc3QixNQUNDQyxhQUFhLGFBQ2IsQ0FBQzNHLEdBQUdDLEtBQUtDLGNBQWMsVUFBVSxLQUNqQyxDQUFDcUcsa0JBQWtCUSxLQUFLSCw4QkFBOEIsRUFBRSxHQUN2RDtBQUNEO0VBQ0Q7QUFFQSxRQUFBLEdBQUtKLG1CQUFBUSxTQUFRLEVBQUVDLEtBQU1uRyxXQUF5QztBQUM3RCxRQUFJUCxVQUFVTyxLQUFLLEVBQUVJLGVBQWU7RUFDckMsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiTUVTU0FHRVMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIlVSTF9MSUZJTFRFUiIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX0xJRklMVEVSX0NBU0UiLCAiVVJMX0xJRklMVEVSX0VYUFIiLCAiVVJMX0xJRklMVEVSX0hJTElHSFQiLCAiVVJMX0xJRklMVEVSX0lOViIsICJMb2dGaWx0ZXIiLCAiX0xvZ0ZpbHRlciIsICJyaWdodHNMb2dPbmx5IiwgImxvY2F0aW9uIiwgImhyZWYiLCAiaW5jbHVkZXMiLCAibGFzdENsaWNrZWQiLCAiJGJvZHkiLCAiY29uc3RydWN0b3IiLCAibWVzc2FnZXMiLCAic2V0IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIm1zZyIsICIkcG9ydGxldExpbmsiLCAiJCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJidWlsZEZvcm0iLCAiJHBhZ2VUb3AiLCAib2xkSW5wdXQiLCAiaW5zdHJ1Y3Rpb25zIiwgImhpZGUiLCAiY2FzaW5nIiwgImhpbGlnaHQiLCAiaW52ZXJ0ZWQiLCAiJGZpZWxkU2V0IiwgImF0dHIiLCAidGV4dCIsICIkbGVnZW5kIiwgImFwcGVuZCIsICJyZlNlbGVjdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgImlkIiwgImh0bWwiLCAiZXNjYXBlIiwgImZpZWxkU2V0SW5uZXIiLCAiY2xhc3MiLCAiaHRtbEZvciIsICJ0eXBlIiwgInZhbHVlIiwgImFmdGVyIiwgInZhbCIsICJwcm9wIiwgInRyaWdnZXIiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJmaWx0ZXJMaSIsICJjdXJJbnB1dCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCQiLCAiX3RoaXMkJGJvZHkkZmluZCR2YWwiLCAiJGxpc3RJdGVtcyIsICJ0b1N0cmluZyIsICJpbnZlcnQiLCAic2VhcmNoIiwgImZsYWdzIiwgInJlZ2V4UmYiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJlcnJvciIsICJjb25zb2xlIiwgImxvZyIsICJSRUdFWF9SSUdIVCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfbG9vayIsICJfbG9vazIiLCAiZWxlbWVudCIsICJsb29rIiwgIm9sZHIiLCAicmVwbGFjZSIsICJuZXdyIiwgIm9sZHJsIiwgInNwbGl0IiwgIm5ld3JsIiwgImkiLCAiaiIsICJyZW1yIiwgImpvaW4iLCAiYWRkciIsICJjc3MiLCAic2hvdyIsICJlcnIiLCAiZSIsICJmIiwgImtleSIsICJtZXNzYWdlIiwgInBsYWluIiwgIlJFR0VYX1RBUkdFVF9QQUdFIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsb2dGaWx0ZXIiLCAiY29uZmlnS2V5MiIsICJ3Z0FjdGlvbiIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgInRlc3QiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

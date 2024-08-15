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
//! src/LogFilter/LogFilter.module.less
var rightsFilter = "LogFilter-module__rightsFilter_kXTJ9W";
//! src/LogFilter/modules/core.tsx
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
var LogFilter = class _LogFilter {
  rightsLogOnly = (() => location.href.includes("type=rights") || location.href.includes("Log/rights"))();
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
    const $fieldSet = $("<fieldset>").attr("id", "rightsFilter").addClass(rightsFilter).text(instructions);
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
      regexRf = new RegExp(search, flags);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci5tb2R1bGUubGVzcyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7cmlnaHRzRmlsdGVyfSBmcm9tICcuLi9Mb2dGaWx0ZXIubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBVUkxfTElGSUxURVI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJyk7XG5jb25zdCBVUkxfTElGSUxURVJfQ0FTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJjYXNlJyk7XG5jb25zdCBVUkxfTElGSUxURVJfRVhQUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJleHByJyk7XG5jb25zdCBVUkxfTElGSUxURVJfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJoaWxpZ2h0Jyk7XG5jb25zdCBVUkxfTElGSUxURVJfSU5WOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmludicpO1xuXG5jbGFzcyBMb2dGaWx0ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJpZ2h0c0xvZ09ubHkgPSBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0eXBlPXJpZ2h0cycpIHx8IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ0xvZy9yaWdodHMnKTtcblx0cHJpdmF0ZSBsYXN0Q2xpY2tlZCA9IGZhbHNlO1xuXHRwcml2YXRlICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdC8vIERlZmluZSBpbnRlcmZhY2UgbWVzc2FnZXNcblx0XHRtdy5tZXNzYWdlcy5zZXQoTUVTU0FHRVMpO1xuXHR9XG5cblx0cHVibGljIGFkZFBvcnRsZXRMaW5rKCk6IHZvaWQge1xuXHRcdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0XHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0dGhpcy4kYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJyxcblx0XHRcdCcjJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtdGV4dCcpLFxuXHRcdFx0J2NhLXJ4ZmlsdGVyJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtZGVzY3JpcHRpb24nKVxuXHRcdCk7XG5cdFx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHRcdGlmIChwb3J0bGV0TGluaykge1xuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgPSAkKHBvcnRsZXRMaW5rKTtcblx0XHRcdCRwb3J0bGV0TGluay5maW5kKCdhJykub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIERpc3BsYXkgZm9ybSBkaXJlY2x0eT9cblx0XHRpZiAoVVJMX0xJRklMVEVSIHx8IFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYnVpbGRGb3JtKCk6IHZvaWQge1xuXHRcdGNvbnN0ICRwYWdlVG9wOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNjb250ZW50U3ViLCAjdG9wYmFyJyk7XG5cdFx0aWYgKCEkcGFnZVRvcC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgb2xkSW5wdXQ6IHN0cmluZyA9ICcnO1xuXHRcdGNvbnN0IGluc3RydWN0aW9uczogc3RyaW5nID0gdGhpcy5yaWdodHNMb2dPbmx5XG5cdFx0XHQ/IExvZ0ZpbHRlci5tc2coJ3JpZ2h0cy1saXN0LWluc3RydWN0aW9ucycpXG5cdFx0XHQ6IExvZ0ZpbHRlci5tc2coJ290aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJyk7XG5cblx0XHR0aGlzLiRib2R5LmZpbmQoJyNjYS1yeGZpbHRlcicpLmhpZGUoKTtcblxuXHRcdC8vIFNldCB1cCBjb25maWdcblx0XHRjb25zdCBjYXNpbmc6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfQ0FTRSA9PT0gJzEnO1xuXHRcdGNvbnN0IGhpbGlnaHQ6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfSElMSUdIVCA9PT0gJzEnO1xuXHRcdGNvbnN0IGludmVydGVkOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0lOViA9PT0gJzEnO1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGZvcm1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdGNvbnN0ICRmaWVsZFNldDogSlF1ZXJ5ID0gJCgnPGZpZWxkc2V0PicpLmF0dHIoJ2lkJywgJ3JpZ2h0c0ZpbHRlcicpLmFkZENsYXNzKHJpZ2h0c0ZpbHRlcikudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGxldCByZlNlbGVjdCA9IDw+PC8+O1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHJmU2VsZWN0ID0gKFxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdFwiPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgZmllbGRTZXRJbm5lciA9IChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2NoZWNrYm94ZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ludmVydC1sYWJlbCcpKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2Nhc2UtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjBcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdmaWx0ZXItYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdoaWdobGlnaHQtYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdFx0Ly8gSW5qZWN0IHRoZXNlIEhUTUwgZWxlbWVudHMgaW50byB0aGUgZmllbGRzZXRcblx0XHQkZmllbGRTZXQuYXBwZW5kKHJmU2VsZWN0LCBmaWVsZFNldElubmVyKTtcblx0XHQkcGFnZVRvcC5hZnRlcigkZmllbGRTZXQpO1xuXG5cdFx0Ly8gU2V0IHBhc3NlZCB2YWx1ZXNcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS52YWwoVVJMX0xJRklMVEVSX0VYUFIgPz8gJycpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcsICFjYXNpbmcpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19pbnZlcnQnKS5wcm9wKCdjaGVja2VkJywgaW52ZXJ0ZWQpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cblx0XHQvLyBCaW5kIGNsaWNrIGFuZCBjaGFuZ2UgbGlzdGVuZXJzXG5cdFx0dGhpcy4kYm9keVxuXHRcdFx0LmZpbmQoJyNyaWdodHNGaWx0ZXInKVxuXHRcdFx0LmZpbmQoJ2lucHV0Jylcblx0XHRcdC5vbigna2V5dXAgY2hhbmdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPT0gJ2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpIHtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1cklucHV0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmIChvbGRJbnB1dCAhPT0gY3VySW5wdXQpIHtcblx0XHRcdFx0XHRvbGRJbnB1dCA9IGN1cklucHV0O1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0JGZpZWxkU2V0LmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHR0aGlzLmxhc3RDbGlja2VkID0gISEkZWxlbWVudC52YWwoKTtcblx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHR9KTtcblxuXHRcdGlmIChVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5maWx0ZXJMaShoaWxpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckxpKGhpbGlnaHQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gR3JhYiB0aGUgbGlzdCBvZiBhbGwgPGxpPiBpbiB0aGUgY29udGVudFxuXHRcdGNvbnN0ICRsaXN0SXRlbXM6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2JvZHlDb250ZW50JykuZmluZCgnbGknKTtcblx0XHRpZiAoISRsaXN0SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aGlsaWdodCA9ICEhKGhpbGlnaHQgfHwgdGhpcy5sYXN0Q2xpY2tlZC50b1N0cmluZygpID09PSAnMScpO1xuXG5cdFx0Ly8gR3JhYiBvcHRpb25zIGZyb20gZm9ybVxuXHRcdGxldCB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0dHlwZSA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19zZWxlY3QnKS5hdHRyKCdzZWxlY3RlZEluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52ZXJ0ID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydCcpLnByb3AoJ2NoZWNrZWQnKSBhcyBib29sZWFuO1xuXHRcdGNvbnN0IHNlYXJjaDogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudmFsKCk/LnRvU3RyaW5nKCkgPz8gJyc7XG5cdFx0Y29uc3QgZmxhZ3M6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcpID8gJ2lnJyA6ICdnJztcblx0XHRsZXQgcmVnZXhSZjogUmVnRXhwIHwgdW5kZWZpbmVkO1xuXHRcdHRyeSB7XG5cdFx0XHRyZWdleFJmID0gbmV3IFJlZ0V4cChzZWFyY2gsIGZsYWdzKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSByZWdleCB1c2VkIHRvIGdyYWIgdGhlIFNwZWNpYWw6TG9nL3JpZ2h0cyBjaGFuZ2VzXG5cdFx0Y29uc3QgUkVHRVhfUklHSFQ6IFJlZ0V4cCA9IC9eLio/dXNlcjouKj9cXHNmcm9tXFxzKC4qPylcXHN0b1xccyguKj8pXFxzXFx1MjAwRS4qPyQvaTtcblxuXHRcdC8vIEl0ZXJhdGVcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGxpc3RJdGVtcykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRsZXQgbG9vazogc3RyaW5nID0gJyc7XG5cblx0XHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbDpMb2cvcmlnaHRzXG5cdFx0XHRcdGNvbnN0IG9sZHI6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDEnKTtcblx0XHRcdFx0Y29uc3QgbmV3cjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMicpO1xuXHRcdFx0XHRjb25zdCBvbGRybDogc3RyaW5nW10gPSBvbGRyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRjb25zdCBuZXdybDogc3RyaW5nW10gPSBuZXdyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgb2xkcmwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbmV3cmwubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChvbGRybFtpXSA9PT0gbmV3cmxbal0pIHtcblx0XHRcdFx0XHRcdFx0b2xkcmxbaV0gPSAnJztcblx0XHRcdFx0XHRcdFx0bmV3cmxbal0gPSAnJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVtcjogc3RyaW5nID0gb2xkcmwuam9pbignLCcpO1xuXHRcdFx0XHRjb25zdCBhZGRyOiBzdHJpbmcgPSBuZXdybC5qb2luKCcsJyk7XG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGFkZHI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRcdGxvb2sgPSByZW1yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMic6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7cmVtcn0gJHthZGRyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICczJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtvbGRyfSAke25ld3J9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBBbnkgb3RoZXIgbGlzdCBvZiA8bGk+IG9iamVjdHNcblx0XHRcdFx0bG9vayA9ICRlbGVtZW50LnRleHQoKTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJycpO1xuXHRcdFx0JGVsZW1lbnQuc2hvdygpO1xuXG5cdFx0XHRpZiAocmVnZXhSZiAmJiAoKGxvb2s/LnNlYXJjaChyZWdleFJmKSA9PT0gLTEgJiYgaW52ZXJ0KSB8fCAobG9vaz8uc2VhcmNoKHJlZ2V4UmYpICE9PSAtMSAmJiAhaW52ZXJ0KSkpIHtcblx0XHRcdFx0aWYgKGhpbGlnaHQpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZmY5OScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFoaWxpZ2h0KSB7XG5cdFx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGtleSA9IGBmaWx0ZXItJHtrZXl9YDtcblx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xuXHR9XG59XG5cbmV4cG9ydCB7TG9nRmlsdGVyfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCByaWdodHNGaWx0ZXIgPSBcIkxvZ0ZpbHRlci1tb2R1bGVfX3JpZ2h0c0ZpbHRlcl9rWFRKOVdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInJpZ2h0c0ZpbHRlclwiOiByaWdodHNGaWx0ZXJcbn07XG4gICAgICAiLCAiY29uc3QgUkVHRVhfVEFSR0VUX1BBR0U6IFJlZ0V4cCA9XG5cdC9eKD86YWN0aXZldXNlcnN8Y2hlY2t1c2VyfGNvbnRyaWJ1dGlvbnN8aXBibG9ja2xpc3R8bGlua3NlYXJjaHxsb2d8c2VhcmNofCg/OnVuY2F0ZWdvcml6fHVudXN8d2FudCllZCg/OmNhdGVnb3JpfHRlbXBsYXQpZXN8d2FudGVkZmlsZXN8KD86c2hvcnR8bG9uZ3xhbmNpZW50fHVuY2F0ZWdvcml6ZWR8dW53YXRjaGVkfHdhbnRlZHxwcm90ZWN0ZWR8ZGVhZGVuZHxsb25lbHl8bmV3KXBhZ2VzfGZld2VzdHJldmlzaW9uc3x3aXRob3V0aW50ZXJ3aWtpfCg/OmRvdWJsZXxicm9rZW4pcmVkaXJlY3RzfHByb3RlY3RlZHRpdGxlc3xjcm9zc25hbWVzcGFjZWxpbmtzfHJlY2VudGNoYW5nZXN8Y2F0ZWdvcmllc3xkaXNhbWJpZ3VhdGlvbnN8bGlzdHJlZGlyZWN0c3xnbG9iYWx1c2Vyc3xnbG9iYWxibG9ja2xpc3R8bGlzdHVzZXJzfHdhdGNobGlzdHxtb3N0KD86bGlua2VkfHJldmlzaW9uc3xjYXRlZ29yaWVzKXxudWtlfHdoYXRsaW5rc2hlcmUpJC9pO1xuXG5leHBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfTtcbiIsICIvKipcbiAqIExvZyBmaWx0ZXIgc2NyaXB0XG4gKlxuICogQ3JlYXRlZCBieSBTcGxhcmthXG4gKiBBbWVuZGVkIGJ5IE1pa2UubGlmZWd1YXJkICYgTHVwb1xuICogUGFydGlhbGx5IHJld3JpdHRlbiBieSBEaWVCdWNoZVxuICpcbiAqIDxsaT4gZWxlbWVudCBGaWx0ZXIgU2NyaXB0LCB2ZXJzaW9uIFswLjJdXG4gKiBTaG91bGQgY3VycmVudGx5IHdvcmsgb24gYWxsIGtub3duIHNraW5zICh3aXRoIGEgI2NvbnRlbnRTdWIgb3IgI3RvcGJhcilcbiAqXG4gKiBtdy51dGlsLmdldFVybCggbXcuY29uZmlnLmdldCggJ3dnUGFnZU5hbWUnICkgKSArICc/JyArXG4gKiAnd2l0aEpTPU1lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJmxpZmlsdGVyPTEmbGlmaWx0ZXJleHByPVRFU1QmbGlmaWx0ZXJjYXNlJmxpZmlsdGVyaGlsaWdodCZsaWZpbHRlcmludidcbiAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xvZ0ZpbHRlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtSRUdFWF9UQVJHRVRfUEFHRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIGxvZ0ZpbHRlcigpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBXaGVuIHRvIGVuYWJsZSBhbGwgdGhpc1xuXHRpZiAoXG5cdFx0d2dBY3Rpb24gIT09ICdoaXN0b3J5JyAmJlxuXHRcdCFtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJykgJiZcblx0XHQhUkVHRVhfVEFSR0VUX1BBR0UudGVzdCh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0bmV3IExvZ0ZpbHRlcigkYm9keSkuYWRkUG9ydGxldExpbmsoKTsgLy8gTG9hZFxuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFNRyxXQUFXO0VBQ2hCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzVCOztBQ2ZBLElBQUFDLG9CQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQVgsSUFBTUMsZUFBZTs7QURHNUIsSUFBTUMsZUFBOEJDLEdBQUdDLEtBQUtDLGNBQWMsVUFBVTtBQUNwRSxJQUFNQyxvQkFBbUNILEdBQUdDLEtBQUtDLGNBQWMsY0FBYztBQUM3RSxJQUFNRSxvQkFBbUNKLEdBQUdDLEtBQUtDLGNBQWMsY0FBYztBQUM3RSxJQUFNRyx1QkFBc0NMLEdBQUdDLEtBQUtDLGNBQWMsaUJBQWlCO0FBQ25GLElBQU1JLG1CQUFrQ04sR0FBR0MsS0FBS0MsY0FBYyxhQUFhO0FBRTNFLElBQU1LLFlBQU4sTUFBTUMsV0FBVTtF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QXFCO0FBQ3ZDQSxVQUFBLFVBQUFOLE9BQWdCTSxHQUFHO0FBSW5CLFdBQU9yRyxHQUFHc0csUUFBUUQsR0FBRyxFQUFFRSxNQUFNO0VBQzlCO0FBQ0Q7O0FFOU9BLElBQU1DLG9CQUNMOztBQ2VELElBQUFDLHFCQUFzQjVHLFFBQUEsaUJBQUE7Q0FFckIsU0FBUzZHLFlBQWtCO0FBQzNCLFFBQU07SUFBQ25ILFdBQUFvSDtFQUFTLElBQUl0SDtBQUNwQixRQUFNO0lBQUN1SDtJQUFVQztFQUEwQixJQUFJN0csR0FBRzhHLE9BQU9DLElBQUk7QUFHN0QsTUFBSS9HLEdBQUc4RyxPQUFPQyxJQUFJSixVQUFTLEdBQUc7QUFDN0I7RUFDRDtBQUVBM0csS0FBRzhHLE9BQU83RixJQUFJMEYsWUFBVyxJQUFJO0FBRzdCLE1BQ0NDLGFBQWEsYUFDYixDQUFDNUcsR0FBR0MsS0FBS0MsY0FBYyxVQUFVLEtBQ2pDLENBQUNzRyxrQkFBa0JRLEtBQUtILDhCQUE4QixFQUFFLEdBQ3ZEO0FBQ0Q7RUFDRDtBQUVBLFFBQUEsR0FBS0osbUJBQUFRLFNBQVEsRUFBRUMsS0FBTXBHLFdBQXlDO0FBQzdELFFBQUlQLFVBQVVPLEtBQUssRUFBRUksZUFBZTtFQUNyQyxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJNRVNTQUdFUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAicmlnaHRzRmlsdGVyIiwgIlVSTF9MSUZJTFRFUiIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX0xJRklMVEVSX0NBU0UiLCAiVVJMX0xJRklMVEVSX0VYUFIiLCAiVVJMX0xJRklMVEVSX0hJTElHSFQiLCAiVVJMX0xJRklMVEVSX0lOViIsICJMb2dGaWx0ZXIiLCAiX0xvZ0ZpbHRlciIsICJyaWdodHNMb2dPbmx5IiwgImxvY2F0aW9uIiwgImhyZWYiLCAiaW5jbHVkZXMiLCAibGFzdENsaWNrZWQiLCAiJGJvZHkiLCAiY29uc3RydWN0b3IiLCAibWVzc2FnZXMiLCAic2V0IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIm1zZyIsICIkcG9ydGxldExpbmsiLCAiJCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJidWlsZEZvcm0iLCAiJHBhZ2VUb3AiLCAib2xkSW5wdXQiLCAiaW5zdHJ1Y3Rpb25zIiwgImhpZGUiLCAiY2FzaW5nIiwgImhpbGlnaHQiLCAiaW52ZXJ0ZWQiLCAiJGZpZWxkU2V0IiwgImF0dHIiLCAiYWRkQ2xhc3MiLCAidGV4dCIsICIkbGVnZW5kIiwgImFwcGVuZCIsICJyZlNlbGVjdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgImlkIiwgImh0bWwiLCAiZXNjYXBlIiwgImZpZWxkU2V0SW5uZXIiLCAiY2xhc3MiLCAiaHRtbEZvciIsICJ0eXBlIiwgInZhbHVlIiwgImFmdGVyIiwgInZhbCIsICJwcm9wIiwgInRyaWdnZXIiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJmaWx0ZXJMaSIsICJjdXJJbnB1dCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCQiLCAiX3RoaXMkJGJvZHkkZmluZCR2YWwiLCAiJGxpc3RJdGVtcyIsICJ0b1N0cmluZyIsICJpbnZlcnQiLCAic2VhcmNoIiwgImZsYWdzIiwgInJlZ2V4UmYiLCAiUmVnRXhwIiwgImVycm9yIiwgImNvbnNvbGUiLCAibG9nIiwgIlJFR0VYX1JJR0hUIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9sb29rIiwgIl9sb29rMiIsICJlbGVtZW50IiwgImxvb2siLCAib2xkciIsICJyZXBsYWNlIiwgIm5ld3IiLCAib2xkcmwiLCAic3BsaXQiLCAibmV3cmwiLCAiaSIsICJqIiwgInJlbXIiLCAiam9pbiIsICJhZGRyIiwgImNvbmNhdCIsICJjc3MiLCAic2hvdyIsICJlcnIiLCAiZSIsICJmIiwgImtleSIsICJtZXNzYWdlIiwgInBsYWluIiwgIlJFR0VYX1RBUkdFVF9QQUdFIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsb2dGaWx0ZXIiLCAiY29uZmlnS2V5MiIsICJ3Z0FjdGlvbiIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgInRlc3QiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

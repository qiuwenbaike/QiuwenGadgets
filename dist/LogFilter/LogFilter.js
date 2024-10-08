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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci5tb2R1bGUubGVzcyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7cmlnaHRzRmlsdGVyfSBmcm9tICcuLi9Mb2dGaWx0ZXIubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBVUkxfTElGSUxURVI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJyk7XG5jb25zdCBVUkxfTElGSUxURVJfQ0FTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJjYXNlJyk7XG5jb25zdCBVUkxfTElGSUxURVJfRVhQUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJleHByJyk7XG5jb25zdCBVUkxfTElGSUxURVJfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJoaWxpZ2h0Jyk7XG5jb25zdCBVUkxfTElGSUxURVJfSU5WOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmludicpO1xuXG5jbGFzcyBMb2dGaWx0ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJpZ2h0c0xvZ09ubHkgPSBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0eXBlPXJpZ2h0cycpIHx8IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ0xvZy9yaWdodHMnKTtcblx0cHJpdmF0ZSBsYXN0Q2xpY2tlZCA9IGZhbHNlO1xuXHRwcml2YXRlICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdC8vIERlZmluZSBpbnRlcmZhY2UgbWVzc2FnZXNcblx0XHRtdy5tZXNzYWdlcy5zZXQoTUVTU0FHRVMpO1xuXHR9XG5cblx0cHVibGljIGFkZFBvcnRsZXRMaW5rKCk6IHZvaWQge1xuXHRcdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0XHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0dGhpcy4kYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJyxcblx0XHRcdCcjJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtdGV4dCcpLFxuXHRcdFx0J2NhLXJ4ZmlsdGVyJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtZGVzY3JpcHRpb24nKVxuXHRcdCk7XG5cdFx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHRcdGlmIChwb3J0bGV0TGluaykge1xuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgPSAkKHBvcnRsZXRMaW5rKTtcblx0XHRcdCRwb3J0bGV0TGluay5maW5kKCdhJykub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIERpc3BsYXkgZm9ybSBkaXJlY2x0eT9cblx0XHRpZiAoVVJMX0xJRklMVEVSIHx8IFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYnVpbGRGb3JtKCk6IHZvaWQge1xuXHRcdGNvbnN0ICRwYWdlVG9wOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNjb250ZW50U3ViLCAjdG9wYmFyJyk7XG5cdFx0aWYgKCEkcGFnZVRvcC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgb2xkSW5wdXQ6IHN0cmluZyA9ICcnO1xuXHRcdGNvbnN0IGluc3RydWN0aW9uczogc3RyaW5nID0gdGhpcy5yaWdodHNMb2dPbmx5XG5cdFx0XHQ/IExvZ0ZpbHRlci5tc2coJ3JpZ2h0cy1saXN0LWluc3RydWN0aW9ucycpXG5cdFx0XHQ6IExvZ0ZpbHRlci5tc2coJ290aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJyk7XG5cblx0XHR0aGlzLiRib2R5LmZpbmQoJyNjYS1yeGZpbHRlcicpLmhpZGUoKTtcblxuXHRcdC8vIFNldCB1cCBjb25maWdcblx0XHRjb25zdCBjYXNpbmc6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfQ0FTRSA9PT0gJzEnO1xuXHRcdGNvbnN0IGhpbGlnaHQ6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfSElMSUdIVCA9PT0gJzEnO1xuXHRcdGNvbnN0IGludmVydGVkOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0lOViA9PT0gJzEnO1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGZvcm1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdGNvbnN0ICRmaWVsZFNldDogSlF1ZXJ5ID0gJCgnPGZpZWxkc2V0PicpXG5cdFx0XHQuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJylcblx0XHRcdC5hZGRDbGFzcyhyaWdodHNGaWx0ZXIgYXMgc3RyaW5nKVxuXHRcdFx0LnRleHQoaW5zdHJ1Y3Rpb25zKTtcblx0XHRjb25zdCAkbGVnZW5kOiBKUXVlcnkgPSAkKCc8bGVnZW5kPicpLnRleHQoTG9nRmlsdGVyLm1zZygnbGVnZW5kJykpO1xuXHRcdCRmaWVsZFNldC5hcHBlbmQoJGxlZ2VuZCk7XG5cblx0XHRsZXQgcmZTZWxlY3QgPSA8PjwvPjtcblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRyZlNlbGVjdCA9IChcblx0XHRcdFx0PHNlbGVjdCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19zZWxlY3RcIj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQnKSl9PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLXJlbW92ZWQnKSl9PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnKSl9PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkLXJlbW92ZWQtc3RhdGljJykpfTwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNvbnN0IGZpZWxkU2V0SW5uZXIgPSAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygncmVnZXgtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhZGdldC1sb2dfZmlsdGVyX19jaGVja2JveGVzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdpbnZlcnQtbGFiZWwnKSl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2VcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdjYXNlLWxhYmVsJykpfTwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2J1dHRvbnNcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzcz17WydjZHgtYnV0dG9uIGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdFx0XHRcdFx0dmFsdWU9XCIwXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnZmlsdGVyLWJ1dHRvbicpKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzcz17WydjZHgtYnV0dG9uIGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdFx0XHRcdFx0dmFsdWU9XCIxXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnaGlnaGxpZ2h0LWJ1dHRvbicpKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHRcdC8vIEluamVjdCB0aGVzZSBIVE1MIGVsZW1lbnRzIGludG8gdGhlIGZpZWxkc2V0XG5cdFx0JGZpZWxkU2V0LmFwcGVuZChyZlNlbGVjdCwgZmllbGRTZXRJbm5lcik7XG5cdFx0JHBhZ2VUb3AuYWZ0ZXIoJGZpZWxkU2V0KTtcblxuXHRcdC8vIFNldCBwYXNzZWQgdmFsdWVzXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudmFsKFVSTF9MSUZJTFRFUl9FWFBSID8/ICcnKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZScpLnByb3AoJ2NoZWNrZWQnLCAhY2FzaW5nKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0JykucHJvcCgnY2hlY2tlZCcsIGludmVydGVkKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS50cmlnZ2VyKCdmb2N1cycpO1xuXG5cdFx0Ly8gQmluZCBjbGljayBhbmQgY2hhbmdlIGxpc3RlbmVyc1xuXHRcdHRoaXMuJGJvZHlcblx0XHRcdC5maW5kKCcjcmlnaHRzRmlsdGVyJylcblx0XHRcdC5maW5kKCdpbnB1dCcpXG5cdFx0XHQub24oJ2tleXVwIGNoYW5nZScsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0aWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT09ICdnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKSB7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjdXJJbnB1dDogc3RyaW5nID0gJGVsZW1lbnQudmFsKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRpZiAob2xkSW5wdXQgIT09IGN1cklucHV0KSB7XG5cdFx0XHRcdFx0b2xkSW5wdXQgPSBjdXJJbnB1dDtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdCRmaWVsZFNldC5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dGhpcy5sYXN0Q2xpY2tlZCA9ICEhJGVsZW1lbnQudmFsKCk7XG5cdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAoVVJMX0xJRklMVEVSX0VYUFIpIHtcblx0XHRcdHRoaXMuZmlsdGVyTGkoaGlsaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJMaShoaWxpZ2h0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIEdyYWIgdGhlIGxpc3Qgb2YgYWxsIDxsaT4gaW4gdGhlIGNvbnRlbnRcblx0XHRjb25zdCAkbGlzdEl0ZW1zOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNib2R5Q29udGVudCcpLmZpbmQoJ2xpJyk7XG5cdFx0aWYgKCEkbGlzdEl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGhpbGlnaHQgPSAhIShoaWxpZ2h0IHx8IHRoaXMubGFzdENsaWNrZWQudG9TdHJpbmcoKSA9PT0gJzEnKTtcblxuXHRcdC8vIEdyYWIgb3B0aW9ucyBmcm9tIGZvcm1cblx0XHRsZXQgdHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHR5cGUgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fc2VsZWN0JykuYXR0cignc2VsZWN0ZWRJbmRleCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludmVydCA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19pbnZlcnQnKS5wcm9wKCdjaGVja2VkJykgYXMgYm9vbGVhbjtcblx0XHRjb25zdCBzZWFyY2g6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnZhbCgpPy50b1N0cmluZygpID8/ICcnO1xuXHRcdGNvbnN0IGZsYWdzOiBzdHJpbmcgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZScpLnByb3AoJ2NoZWNrZWQnKSA/ICdpZycgOiAnZyc7XG5cdFx0bGV0IHJlZ2V4UmY6IFJlZ0V4cCB8IHVuZGVmaW5lZDtcblx0XHR0cnkge1xuXHRcdFx0cmVnZXhSZiA9IG5ldyBSZWdFeHAoc2VhcmNoLCBmbGFncyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcmVnZXggdXNlZCB0byBncmFiIHRoZSBTcGVjaWFsOkxvZy9yaWdodHMgY2hhbmdlc1xuXHRcdGNvbnN0IFJFR0VYX1JJR0hUOiBSZWdFeHAgPSAvXi4qP3VzZXI6Lio/XFxzZnJvbVxccyguKj8pXFxzdG9cXHMoLio/KVxcc1xcdTIwMEUuKj8kL2k7XG5cblx0XHQvLyBJdGVyYXRlXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdC8vIFNwZWNpYWw6TG9nL3JpZ2h0c1xuXHRcdFx0XHRjb25zdCBvbGRyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQxJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3I6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDInKTtcblx0XHRcdFx0Y29uc3Qgb2xkcmw6IHN0cmluZ1tdID0gb2xkci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Y29uc3QgbmV3cmw6IHN0cmluZ1tdID0gbmV3ci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG9sZHJsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5ld3JsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkcmxbaV0gPT09IG5ld3JsW2pdKSB7XG5cdFx0XHRcdFx0XHRcdG9sZHJsW2ldID0gJyc7XG5cdFx0XHRcdFx0XHRcdG5ld3JsW2pdID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHJlbXI6IHN0cmluZyA9IG9sZHJsLmpvaW4oJywnKTtcblx0XHRcdFx0Y29uc3QgYWRkcjogc3RyaW5nID0gbmV3cmwuam9pbignLCcpO1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBhZGRyO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0XHRsb29rID0gcmVtcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke3JlbXJ9ICR7YWRkcn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMyc6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7b2xkcn0gJHtuZXdyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW55IG90aGVyIGxpc3Qgb2YgPGxpPiBvYmplY3RzXG5cdFx0XHRcdGxvb2sgPSAkZWxlbWVudC50ZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdCRlbGVtZW50LnNob3coKTtcblxuXHRcdFx0aWYgKHJlZ2V4UmYgJiYgKChsb29rPy5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2s/LnNlYXJjaChyZWdleFJmKSAhPT0gLTEgJiYgIWludmVydCkpKSB7XG5cdFx0XHRcdGlmIChoaWxpZ2h0KSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmOTknKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGlsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHJldHVybiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcblx0fVxufVxuXG5leHBvcnQge0xvZ0ZpbHRlcn07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Mb2dGaWx0ZXIvTG9nRmlsdGVyLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcmlnaHRzRmlsdGVyID0gXCJMb2dGaWx0ZXItbW9kdWxlX19yaWdodHNGaWx0ZXJfa1hUSjlXXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJyaWdodHNGaWx0ZXJcIjogcmlnaHRzRmlsdGVyXG59O1xuICAgICAgIiwgImNvbnN0IFJFR0VYX1RBUkdFVF9QQUdFOiBSZWdFeHAgPVxuXHQvXig/OmFjdGl2ZXVzZXJzfGNoZWNrdXNlcnxjb250cmlidXRpb25zfGlwYmxvY2tsaXN0fGxpbmtzZWFyY2h8bG9nfHNlYXJjaHwoPzp1bmNhdGVnb3Jpenx1bnVzfHdhbnQpZWQoPzpjYXRlZ29yaXx0ZW1wbGF0KWVzfHdhbnRlZGZpbGVzfCg/OnNob3J0fGxvbmd8YW5jaWVudHx1bmNhdGVnb3JpemVkfHVud2F0Y2hlZHx3YW50ZWR8cHJvdGVjdGVkfGRlYWRlbmR8bG9uZWx5fG5ldylwYWdlc3xmZXdlc3RyZXZpc2lvbnN8d2l0aG91dGludGVyd2lraXwoPzpkb3VibGV8YnJva2VuKXJlZGlyZWN0c3xwcm90ZWN0ZWR0aXRsZXN8Y3Jvc3NuYW1lc3BhY2VsaW5rc3xyZWNlbnRjaGFuZ2VzfGNhdGVnb3JpZXN8ZGlzYW1iaWd1YXRpb25zfGxpc3RyZWRpcmVjdHN8Z2xvYmFsdXNlcnN8Z2xvYmFsYmxvY2tsaXN0fGxpc3R1c2Vyc3x3YXRjaGxpc3R8bW9zdCg/OmxpbmtlZHxyZXZpc2lvbnN8Y2F0ZWdvcmllcyl8bnVrZXx3aGF0bGlua3NoZXJlKSQvaTtcblxuZXhwb3J0IHtSRUdFWF9UQVJHRVRfUEFHRX07XG4iLCAiLyoqXG4gKiBMb2cgZmlsdGVyIHNjcmlwdFxuICpcbiAqIENyZWF0ZWQgYnkgU3BsYXJrYVxuICogQW1lbmRlZCBieSBNaWtlLmxpZmVndWFyZCAmIEx1cG9cbiAqIFBhcnRpYWxseSByZXdyaXR0ZW4gYnkgRGllQnVjaGVcbiAqXG4gKiA8bGk+IGVsZW1lbnQgRmlsdGVyIFNjcmlwdCwgdmVyc2lvbiBbMC4yXVxuICogU2hvdWxkIGN1cnJlbnRseSB3b3JrIG9uIGFsbCBrbm93biBza2lucyAod2l0aCBhICNjb250ZW50U3ViIG9yICN0b3BiYXIpXG4gKlxuICogbXcudXRpbC5nZXRVcmwoIG13LmNvbmZpZy5nZXQoICd3Z1BhZ2VOYW1lJyApICkgKyAnPycgK1xuICogJ3dpdGhKUz1NZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcyZsaWZpbHRlcj0xJmxpZmlsdGVyZXhwcj1URVNUJmxpZmlsdGVyY2FzZSZsaWZpbHRlcmhpbGlnaHQmbGlmaWx0ZXJpbnYnXG4gKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtMb2dGaWx0ZXJ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBsb2dGaWx0ZXIoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gV2hlbiB0byBlbmFibGUgYWxsIHRoaXNcblx0aWYgKFxuXHRcdHdnQWN0aW9uICE9PSAnaGlzdG9yeScgJiZcblx0XHQhbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpICYmXG5cdFx0IVJFR0VYX1RBUkdFVF9QQUdFLnRlc3Qod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgfHwgJycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdG5ldyBMb2dGaWx0ZXIoJGJvZHkpLmFkZFBvcnRsZXRMaW5rKCk7IC8vIExvYWRcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQ0MsSUFBQUYsWUFBYTtBQURkLElBQUFFLGtCQUFBO0VBQ0NGO0FBQ0Q7O0FDRkEsSUFBTUcsV0FBVztFQUNoQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM1Qjs7QUNmQSxJQUFBQyxvQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FYLElBQU1DLGVBQWU7O0FERzVCLElBQU1DLGVBQThCQyxHQUFHQyxLQUFLQyxjQUFjLFVBQVU7QUFDcEUsSUFBTUMsb0JBQW1DSCxHQUFHQyxLQUFLQyxjQUFjLGNBQWM7QUFDN0UsSUFBTUUsb0JBQW1DSixHQUFHQyxLQUFLQyxjQUFjLGNBQWM7QUFDN0UsSUFBTUcsdUJBQXNDTCxHQUFHQyxLQUFLQyxjQUFjLGlCQUFpQjtBQUNuRixJQUFNSSxtQkFBa0NOLEdBQUdDLEtBQUtDLGNBQWMs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QixFQUFBO0lBQUE7RUFDRDtFQUVBLE9BQWU5RSxJQUFJK0UsS0FBcUI7QUFDdkNBLFVBQUEsVUFBQU4sT0FBZ0JNLEdBQUc7QUFJbkIsV0FBT3JHLEdBQUdzRyxRQUFRRCxHQUFHLEVBQUVFLE1BQU07RUFDOUI7QUFDRDs7QUVqUEEsSUFBTUMsb0JBQ0w7O0FDZUQsSUFBQUMscUJBQXNCNUcsUUFBQSxpQkFBQTtDQUVyQixTQUFTNkcsWUFBa0I7QUFDM0IsUUFBTTtJQUFDbkgsV0FBQW9IO0VBQVMsSUFBSXRIO0FBQ3BCLFFBQU07SUFBQ3VIO0lBQVVDO0VBQTBCLElBQUk3RyxHQUFHOEcsT0FBT0MsSUFBSTtBQUc3RCxNQUFJL0csR0FBRzhHLE9BQU9DLElBQUlKLFVBQVMsR0FBRztBQUM3QjtFQUNEO0FBRUEzRyxLQUFHOEcsT0FBTzdGLElBQUkwRixZQUFXLElBQUk7QUFHN0IsTUFDQ0MsYUFBYSxhQUNiLENBQUM1RyxHQUFHQyxLQUFLQyxjQUFjLFVBQVUsS0FDakMsQ0FBQ3NHLGtCQUFrQlEsS0FBS0gsOEJBQThCLEVBQUUsR0FDdkQ7QUFDRDtFQUNEO0FBRUEsUUFBQSxHQUFLSixtQkFBQVEsU0FBUSxFQUFFQyxLQUFNcEcsV0FBeUM7QUFDN0QsUUFBSVAsVUFBVU8sS0FBSyxFQUFFSSxlQUFlO0VBQ3JDLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJvcHRpb25zX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY29uZmlnS2V5IiwgImRlZmF1bHQiLCAib3B0aW9uc19kZWZhdWx0IiwgIk1FU1NBR0VTIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJyaWdodHNGaWx0ZXIiLCAiVVJMX0xJRklMVEVSIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfTElGSUxURVJfQ0FTRSIsICJVUkxfTElGSUxURVJfRVhQUiIsICJVUkxfTElGSUxURVJfSElMSUdIVCIsICJVUkxfTElGSUxURVJfSU5WIiwgIkxvZ0ZpbHRlciIsICJfTG9nRmlsdGVyIiwgInJpZ2h0c0xvZ09ubHkiLCAibG9jYXRpb24iLCAiaHJlZiIsICJpbmNsdWRlcyIsICJsYXN0Q2xpY2tlZCIsICIkYm9keSIsICJjb25zdHJ1Y3RvciIsICJtZXNzYWdlcyIsICJzZXQiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiZmluZCIsICJsZW5ndGgiLCAibXNnIiwgIiRwb3J0bGV0TGluayIsICIkIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImJ1aWxkRm9ybSIsICIkcGFnZVRvcCIsICJvbGRJbnB1dCIsICJpbnN0cnVjdGlvbnMiLCAiaGlkZSIsICJjYXNpbmciLCAiaGlsaWdodCIsICJpbnZlcnRlZCIsICIkZmllbGRTZXQiLCAiYXR0ciIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgIiRsZWdlbmQiLCAiYXBwZW5kIiwgInJmU2VsZWN0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAiaWQiLCAiaHRtbCIsICJlc2NhcGUiLCAiZmllbGRTZXRJbm5lciIsICJjbGFzcyIsICJodG1sRm9yIiwgInR5cGUiLCAidmFsdWUiLCAiYWZ0ZXIiLCAidmFsIiwgInByb3AiLCAidHJpZ2dlciIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImZpbHRlckxpIiwgImN1cklucHV0IiwgIl90aGlzJCRib2R5JGZpbmQkdmFsJCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCIsICIkbGlzdEl0ZW1zIiwgInRvU3RyaW5nIiwgImludmVydCIsICJzZWFyY2giLCAiZmxhZ3MiLCAicmVnZXhSZiIsICJSZWdFeHAiLCAiZXJyb3IiLCAiY29uc29sZSIsICJsb2ciLCAiUkVHRVhfUklHSFQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX2xvb2siLCAiX2xvb2syIiwgImVsZW1lbnQiLCAibG9vayIsICJvbGRyIiwgInJlcGxhY2UiLCAibmV3ciIsICJvbGRybCIsICJzcGxpdCIsICJuZXdybCIsICJpIiwgImoiLCAicmVtciIsICJqb2luIiwgImFkZHIiLCAiY29uY2F0IiwgImNzcyIsICJzaG93IiwgImVyciIsICJlIiwgImYiLCAia2V5IiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiUkVHRVhfVEFSR0VUX1BBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

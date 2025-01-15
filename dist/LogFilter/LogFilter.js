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
      className: "gadget-log_filter__regex"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__regex"
    }, mw.html.escape(_LogFilter.msg("regex-label"))), /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__regex"
    })), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__checkboxes"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__invert"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__invert",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__invert"
    }, mw.html.escape(_LogFilter.msg("invert-label")))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__case"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__case",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__case"
    }, mw.html.escape(_LogFilter.msg("case-label"))))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__buttons"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      className: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "0"
    }, mw.html.escape(_LogFilter.msg("filter-button"))), /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      className: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci5tb2R1bGUubGVzcyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7cmlnaHRzRmlsdGVyfSBmcm9tICcuLi9Mb2dGaWx0ZXIubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBVUkxfTElGSUxURVI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJyk7XG5jb25zdCBVUkxfTElGSUxURVJfQ0FTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJjYXNlJyk7XG5jb25zdCBVUkxfTElGSUxURVJfRVhQUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJleHByJyk7XG5jb25zdCBVUkxfTElGSUxURVJfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJoaWxpZ2h0Jyk7XG5jb25zdCBVUkxfTElGSUxURVJfSU5WOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmludicpO1xuXG5jbGFzcyBMb2dGaWx0ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJpZ2h0c0xvZ09ubHkgPSBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0eXBlPXJpZ2h0cycpIHx8IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ0xvZy9yaWdodHMnKTtcblx0cHJpdmF0ZSBsYXN0Q2xpY2tlZCA9IGZhbHNlO1xuXHRwcml2YXRlICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdC8vIERlZmluZSBpbnRlcmZhY2UgbWVzc2FnZXNcblx0XHRtdy5tZXNzYWdlcy5zZXQoTUVTU0FHRVMpO1xuXHR9XG5cblx0cHVibGljIGFkZFBvcnRsZXRMaW5rKCk6IHZvaWQge1xuXHRcdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0XHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0dGhpcy4kYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJyxcblx0XHRcdCcjJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtdGV4dCcpLFxuXHRcdFx0J2NhLXJ4ZmlsdGVyJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtZGVzY3JpcHRpb24nKVxuXHRcdCk7XG5cdFx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHRcdGlmIChwb3J0bGV0TGluaykge1xuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgPSAkKHBvcnRsZXRMaW5rKTtcblx0XHRcdCRwb3J0bGV0TGluay5maW5kKCdhJykub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIERpc3BsYXkgZm9ybSBkaXJlY2x0eT9cblx0XHRpZiAoVVJMX0xJRklMVEVSIHx8IFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYnVpbGRGb3JtKCk6IHZvaWQge1xuXHRcdGNvbnN0ICRwYWdlVG9wOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNjb250ZW50U3ViLCAjdG9wYmFyJyk7XG5cdFx0aWYgKCEkcGFnZVRvcC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgb2xkSW5wdXQ6IHN0cmluZyA9ICcnO1xuXHRcdGNvbnN0IGluc3RydWN0aW9uczogc3RyaW5nID0gdGhpcy5yaWdodHNMb2dPbmx5XG5cdFx0XHQ/IExvZ0ZpbHRlci5tc2coJ3JpZ2h0cy1saXN0LWluc3RydWN0aW9ucycpXG5cdFx0XHQ6IExvZ0ZpbHRlci5tc2coJ290aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJyk7XG5cblx0XHR0aGlzLiRib2R5LmZpbmQoJyNjYS1yeGZpbHRlcicpLmhpZGUoKTtcblxuXHRcdC8vIFNldCB1cCBjb25maWdcblx0XHRjb25zdCBjYXNpbmc6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfQ0FTRSA9PT0gJzEnO1xuXHRcdGNvbnN0IGhpbGlnaHQ6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfSElMSUdIVCA9PT0gJzEnO1xuXHRcdGNvbnN0IGludmVydGVkOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0lOViA9PT0gJzEnO1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGZvcm1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdGNvbnN0ICRmaWVsZFNldDogSlF1ZXJ5ID0gJCgnPGZpZWxkc2V0PicpXG5cdFx0XHQuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJylcblx0XHRcdC5hZGRDbGFzcyhyaWdodHNGaWx0ZXIgYXMgc3RyaW5nKVxuXHRcdFx0LnRleHQoaW5zdHJ1Y3Rpb25zKTtcblx0XHRjb25zdCAkbGVnZW5kOiBKUXVlcnkgPSAkKCc8bGVnZW5kPicpLnRleHQoTG9nRmlsdGVyLm1zZygnbGVnZW5kJykpO1xuXHRcdCRmaWVsZFNldC5hcHBlbmQoJGxlZ2VuZCk7XG5cblx0XHRsZXQgcmZTZWxlY3QgPSA8PjwvPjtcblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRyZlNlbGVjdCA9IChcblx0XHRcdFx0PHNlbGVjdCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19zZWxlY3RcIj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQnKSl9PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLXJlbW92ZWQnKSl9PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnKSl9PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkLXJlbW92ZWQtc3RhdGljJykpfTwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNvbnN0IGZpZWxkU2V0SW5uZXIgPSAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4XCI+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ3JlZ2V4LWxhYmVsJykpfTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4XCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2NoZWNrYm94ZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdpbnZlcnQtbGFiZWwnKSl9XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2VcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2VcIj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnY2FzZS1sYWJlbCcpKX08L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WydjZHgtYnV0dG9uIGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdFx0XHRcdFx0dmFsdWU9XCIwXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnZmlsdGVyLWJ1dHRvbicpKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1snY2R4LWJ1dHRvbiBjZHgtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnLCAnY2R4LWJ1dHRvbi0td2VpZ2h0LXByaW1hcnknXX1cblx0XHRcdFx0XHRcdHZhbHVlPVwiMVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2hpZ2hsaWdodC1idXR0b24nKSl9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0XHQvLyBJbmplY3QgdGhlc2UgSFRNTCBlbGVtZW50cyBpbnRvIHRoZSBmaWVsZHNldFxuXHRcdCRmaWVsZFNldC5hcHBlbmQocmZTZWxlY3QsIGZpZWxkU2V0SW5uZXIpO1xuXHRcdCRwYWdlVG9wLmFmdGVyKCRmaWVsZFNldCk7XG5cblx0XHQvLyBTZXQgcGFzc2VkIHZhbHVlc1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnZhbChVUkxfTElGSUxURVJfRVhQUiA/PyAnJyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2UnKS5wcm9wKCdjaGVja2VkJywgIWNhc2luZyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydCcpLnByb3AoJ2NoZWNrZWQnLCBpbnZlcnRlZCk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudHJpZ2dlcignZm9jdXMnKTtcblxuXHRcdC8vIEJpbmQgY2xpY2sgYW5kIGNoYW5nZSBsaXN0ZW5lcnNcblx0XHR0aGlzLiRib2R5XG5cdFx0XHQuZmluZCgnI3JpZ2h0c0ZpbHRlcicpXG5cdFx0XHQuZmluZCgnaW5wdXQnKVxuXHRcdFx0Lm9uKCdrZXl1cCBjaGFuZ2UnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9PSAnZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4Jykge1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY3VySW5wdXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpIGFzIHN0cmluZztcblx0XHRcdFx0aWYgKG9sZElucHV0ICE9PSBjdXJJbnB1dCkge1xuXHRcdFx0XHRcdG9sZElucHV0ID0gY3VySW5wdXQ7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHQkZmllbGRTZXQuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdHRoaXMubGFzdENsaWNrZWQgPSAhISRlbGVtZW50LnZhbCgpO1xuXHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmZpbHRlckxpKGhpbGlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyTGkoaGlsaWdodD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBHcmFiIHRoZSBsaXN0IG9mIGFsbCA8bGk+IGluIHRoZSBjb250ZW50XG5cdFx0Y29uc3QgJGxpc3RJdGVtczogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjYm9keUNvbnRlbnQnKS5maW5kKCdsaScpO1xuXHRcdGlmICghJGxpc3RJdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRoaWxpZ2h0ID0gISEoaGlsaWdodCB8fCB0aGlzLmxhc3RDbGlja2VkLnRvU3RyaW5nKCkgPT09ICcxJyk7XG5cblx0XHQvLyBHcmFiIG9wdGlvbnMgZnJvbSBmb3JtXG5cdFx0bGV0IHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHR0eXBlID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdCcpLmF0dHIoJ3NlbGVjdGVkSW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnZlcnQgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0JykucHJvcCgnY2hlY2tlZCcpIGFzIGJvb2xlYW47XG5cdFx0Y29uc3Qgc2VhcmNoOiBzdHJpbmcgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS52YWwoKT8udG9TdHJpbmcoKSA/PyAnJztcblx0XHRjb25zdCBmbGFnczogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2UnKS5wcm9wKCdjaGVja2VkJykgPyAnaWcnIDogJ2cnO1xuXHRcdGxldCByZWdleFJmOiBSZWdFeHAgfCB1bmRlZmluZWQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlZ2V4UmYgPSBuZXcgUmVnRXhwKHNlYXJjaCwgZmxhZ3MpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIHJlZ2V4IHVzZWQgdG8gZ3JhYiB0aGUgU3BlY2lhbDpMb2cvcmlnaHRzIGNoYW5nZXNcblx0XHRjb25zdCBSRUdFWF9SSUdIVDogUmVnRXhwID0gL14uKj91c2VyOi4qP1xcc2Zyb21cXHMoLio/KVxcc3RvXFxzKC4qPylcXHNcXHUyMDBFLio/JC9pO1xuXG5cdFx0Ly8gSXRlcmF0ZVxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbGlzdEl0ZW1zKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdGxldCBsb29rOiBzdHJpbmcgPSAnJztcblxuXHRcdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0XHQvLyBTcGVjaWFsOkxvZy9yaWdodHNcblx0XHRcdFx0Y29uc3Qgb2xkcjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMScpO1xuXHRcdFx0XHRjb25zdCBuZXdyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQyJyk7XG5cdFx0XHRcdGNvbnN0IG9sZHJsOiBzdHJpbmdbXSA9IG9sZHIuc3BsaXQoJywgJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3JsOiBzdHJpbmdbXSA9IG5ld3Iuc3BsaXQoJywgJyk7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBvbGRybC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBuZXdybC5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aWYgKG9sZHJsW2ldID09PSBuZXdybFtqXSkge1xuXHRcdFx0XHRcdFx0XHRvbGRybFtpXSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRuZXdybFtqXSA9ICcnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCByZW1yOiBzdHJpbmcgPSBvbGRybC5qb2luKCcsJyk7XG5cdFx0XHRcdGNvbnN0IGFkZHI6IHN0cmluZyA9IG5ld3JsLmpvaW4oJywnKTtcblx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdFx0XHRsb29rID0gYWRkcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzEnOlxuXHRcdFx0XHRcdFx0bG9vayA9IHJlbXI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcyJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtyZW1yfSAke2FkZHJ9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzMnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke29sZHJ9ICR7bmV3cn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEFueSBvdGhlciBsaXN0IG9mIDxsaT4gb2JqZWN0c1xuXHRcdFx0XHRsb29rID0gJGVsZW1lbnQudGV4dCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnJyk7XG5cdFx0XHQkZWxlbWVudC5zaG93KCk7XG5cblx0XHRcdGlmIChyZWdleFJmICYmICgobG9vaz8uc2VhcmNoKHJlZ2V4UmYpID09PSAtMSAmJiBpbnZlcnQpIHx8IChsb29rPy5zZWFyY2gocmVnZXhSZikgIT09IC0xICYmICFpbnZlcnQpKSkge1xuXHRcdFx0XHRpZiAoaGlsaWdodCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZmZmZjk5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIWhpbGlnaHQpIHtcblx0XHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIG1zZyhrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0a2V5ID0gYGZpbHRlci0ke2tleX1gO1xuXHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRyZXR1cm4gbXcubWVzc2FnZShrZXkpLnBsYWluKCk7XG5cdH1cbn1cblxuZXhwb3J0IHtMb2dGaWx0ZXJ9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHJpZ2h0c0ZpbHRlciA9IFwiTG9nRmlsdGVyLW1vZHVsZV9fcmlnaHRzRmlsdGVyX2tYVEo5V1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwicmlnaHRzRmlsdGVyXCI6IHJpZ2h0c0ZpbHRlclxufTtcbiAgICAgICIsICJjb25zdCBSRUdFWF9UQVJHRVRfUEFHRTogUmVnRXhwID1cblx0L14oPzphY3RpdmV1c2Vyc3xjaGVja3VzZXJ8Y29udHJpYnV0aW9uc3xpcGJsb2NrbGlzdHxsaW5rc2VhcmNofGxvZ3xzZWFyY2h8KD86dW5jYXRlZ29yaXp8dW51c3x3YW50KWVkKD86Y2F0ZWdvcml8dGVtcGxhdCllc3x3YW50ZWRmaWxlc3woPzpzaG9ydHxsb25nfGFuY2llbnR8dW5jYXRlZ29yaXplZHx1bndhdGNoZWR8d2FudGVkfHByb3RlY3RlZHxkZWFkZW5kfGxvbmVseXxuZXcpcGFnZXN8ZmV3ZXN0cmV2aXNpb25zfHdpdGhvdXRpbnRlcndpa2l8KD86ZG91YmxlfGJyb2tlbilyZWRpcmVjdHN8cHJvdGVjdGVkdGl0bGVzfGNyb3NzbmFtZXNwYWNlbGlua3N8cmVjZW50Y2hhbmdlc3xjYXRlZ29yaWVzfGRpc2FtYmlndWF0aW9uc3xsaXN0cmVkaXJlY3RzfGdsb2JhbHVzZXJzfGdsb2JhbGJsb2NrbGlzdHxsaXN0dXNlcnN8d2F0Y2hsaXN0fG1vc3QoPzpsaW5rZWR8cmV2aXNpb25zfGNhdGVnb3JpZXMpfG51a2V8d2hhdGxpbmtzaGVyZSkkL2k7XG5cbmV4cG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9O1xuIiwgIi8qKlxuICogTG9nIGZpbHRlciBzY3JpcHRcbiAqXG4gKiBDcmVhdGVkIGJ5IFNwbGFya2FcbiAqIEFtZW5kZWQgYnkgTWlrZS5saWZlZ3VhcmQgJiBMdXBvXG4gKiBQYXJ0aWFsbHkgcmV3cml0dGVuIGJ5IERpZUJ1Y2hlXG4gKlxuICogPGxpPiBlbGVtZW50IEZpbHRlciBTY3JpcHQsIHZlcnNpb24gWzAuMl1cbiAqIFNob3VsZCBjdXJyZW50bHkgd29yayBvbiBhbGwga25vd24gc2tpbnMgKHdpdGggYSAjY29udGVudFN1YiBvciAjdG9wYmFyKVxuICpcbiAqIG13LnV0aWwuZ2V0VXJsKCBtdy5jb25maWcuZ2V0KCAnd2dQYWdlTmFtZScgKSApICsgJz8nICtcbiAqICd3aXRoSlM9TWVkaWFXaWtpOkdhZGdldC1Mb2dGaWx0ZXIuanMmbGlmaWx0ZXI9MSZsaWZpbHRlcmV4cHI9VEVTVCZsaWZpbHRlcmNhc2UmbGlmaWx0ZXJoaWxpZ2h0JmxpZmlsdGVyaW52J1xuICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TG9nRmlsdGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbG9nRmlsdGVyKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIFdoZW4gdG8gZW5hYmxlIGFsbCB0aGlzXG5cdGlmIChcblx0XHR3Z0FjdGlvbiAhPT0gJ2hpc3RvcnknICYmXG5cdFx0IW13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXInKSAmJlxuXHRcdCFSRUdFWF9UQVJHRVRfUEFHRS50ZXN0KHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRuZXcgTG9nRmlsdGVyKCRib2R5KS5hZGRQb3J0bGV0TGluaygpOyAvLyBMb2FkXG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQSxDQUFBO0FBQUFDLFNBQUFELGlCQUFBO0VBQUFFLFdBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFDO0FBQUEsQ0FBQTtBQUNDLElBQUFGLFlBQWE7QUFEZCxJQUFBRSxrQkFBQTtFQUNDRjtBQUNEOztBQ0ZBLElBQU1HLFdBQVc7RUFDaEIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDNUI7O0FDZkEsSUFBQUMsb0JBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBWCxJQUFNQyxlQUFlOztBREc1QixJQUFNQyxlQUE4QkMsR0FBR0MsS0FBS0MsY0FBYyxVQUFVO0FBQ3BFLElBQU1DLG9CQUFtQ0gsR0FBR0MsS0FBS0MsY0FBYyxjQUFjO0FBQzdFLElBQU1FLG9CQUFtQ0osR0FBR0MsS0FBS0MsY0FBYyxjQUFjO0FBQzdFLElBQU1HLHVCQUFzQ0wsR0FBR0MsS0FBS0MsY0FBYyxpQkFBaUI7QUFDbkYsSUFB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R0FBQTtJQUFBLFVBQUE7QUFBQXhCLGlCQUFBMEIsRUFBQTtJQUFBO0VBQ0Q7RUFFQSxPQUFlOUUsSUFBSStFLEtBQXFCO0FBQ3ZDQSxVQUFBLFVBQUFOLE9BQWdCTSxHQUFHO0FBSW5CLFdBQU9yRyxHQUFHc0csUUFBUUQsR0FBRyxFQUFFRSxNQUFNO0VBQzlCO0FBQ0Q7O0FFalBBLElBQU1DLG9CQUNMOztBQ2VELElBQUFDLHFCQUFzQjVHLFFBQUEsaUJBQUE7Q0FFckIsU0FBUzZHLFlBQWtCO0FBQzNCLFFBQU07SUFBQ25ILFdBQUFvSDtFQUFTLElBQUl0SDtBQUNwQixRQUFNO0lBQUN1SDtJQUFVQztFQUEwQixJQUFJN0csR0FBRzhHLE9BQU9DLElBQUk7QUFHN0QsTUFBSS9HLEdBQUc4RyxPQUFPQyxJQUFJSixVQUFTLEdBQUc7QUFDN0I7RUFDRDtBQUVBM0csS0FBRzhHLE9BQU83RixJQUFJMEYsWUFBVyxJQUFJO0FBRzdCLE1BQ0NDLGFBQWEsYUFDYixDQUFDNUcsR0FBR0MsS0FBS0MsY0FBYyxVQUFVLEtBQ2pDLENBQUNzRyxrQkFBa0JRLEtBQUtILDhCQUE4QixFQUFFLEdBQ3ZEO0FBQ0Q7RUFDRDtBQUVBLFFBQUEsR0FBS0osbUJBQUFRLFNBQVEsRUFBRUMsS0FBTXBHLFdBQXlDO0FBQzdELFFBQUlQLFVBQVVPLEtBQUssRUFBRUksZUFBZTtFQUNyQyxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJNRVNTQUdFUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAicmlnaHRzRmlsdGVyIiwgIlVSTF9MSUZJTFRFUiIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX0xJRklMVEVSX0NBU0UiLCAiVVJMX0xJRklMVEVSX0VYUFIiLCAiVVJMX0xJRklMVEVSX0hJTElHSFQiLCAiVVJMX0xJRklMVEVSX0lOViIsICJMb2dGaWx0ZXIiLCAiX0xvZ0ZpbHRlciIsICJyaWdodHNMb2dPbmx5IiwgImxvY2F0aW9uIiwgImhyZWYiLCAiaW5jbHVkZXMiLCAibGFzdENsaWNrZWQiLCAiJGJvZHkiLCAiY29uc3RydWN0b3IiLCAibWVzc2FnZXMiLCAic2V0IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIm1zZyIsICIkcG9ydGxldExpbmsiLCAiJCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJidWlsZEZvcm0iLCAiJHBhZ2VUb3AiLCAib2xkSW5wdXQiLCAiaW5zdHJ1Y3Rpb25zIiwgImhpZGUiLCAiY2FzaW5nIiwgImhpbGlnaHQiLCAiaW52ZXJ0ZWQiLCAiJGZpZWxkU2V0IiwgImF0dHIiLCAiYWRkQ2xhc3MiLCAidGV4dCIsICIkbGVnZW5kIiwgImFwcGVuZCIsICJyZlNlbGVjdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgImlkIiwgImh0bWwiLCAiZXNjYXBlIiwgImZpZWxkU2V0SW5uZXIiLCAiY2xhc3NOYW1lIiwgImh0bWxGb3IiLCAidHlwZSIsICJ2YWx1ZSIsICJhZnRlciIsICJ2YWwiLCAicHJvcCIsICJ0cmlnZ2VyIiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAiZmlsdGVyTGkiLCAiY3VySW5wdXQiLCAiX3RoaXMkJGJvZHkkZmluZCR2YWwkIiwgIl90aGlzJCRib2R5JGZpbmQkdmFsIiwgIiRsaXN0SXRlbXMiLCAidG9TdHJpbmciLCAiaW52ZXJ0IiwgInNlYXJjaCIsICJmbGFncyIsICJyZWdleFJmIiwgIlJlZ0V4cCIsICJlcnJvciIsICJjb25zb2xlIiwgImxvZyIsICJSRUdFWF9SSUdIVCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfbG9vayIsICJfbG9vazIiLCAiZWxlbWVudCIsICJsb29rIiwgIm9sZHIiLCAicmVwbGFjZSIsICJuZXdyIiwgIm9sZHJsIiwgInNwbGl0IiwgIm5ld3JsIiwgImkiLCAiaiIsICJyZW1yIiwgImpvaW4iLCAiYWRkciIsICJjb25jYXQiLCAiY3NzIiwgInNob3ciLCAiZXJyIiwgImUiLCAiZiIsICJrZXkiLCAibWVzc2FnZSIsICJwbGFpbiIsICJSRUdFWF9UQVJHRVRfUEFHRSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibG9nRmlsdGVyIiwgImNvbmZpZ0tleTIiLCAid2dBY3Rpb24iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJ0ZXN0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K

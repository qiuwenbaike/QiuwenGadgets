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
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
//! src/LogFilter/LogFilter.module.less
var rightsFilter = "LogFilter-module__rightsFilter_kXTJ9W__4100";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci5tb2R1bGUubGVzcyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge3JpZ2h0c0ZpbHRlcn0gZnJvbSAnLi4vTG9nRmlsdGVyLm1vZHVsZS5sZXNzJztcblxuY29uc3QgVVJMX0xJRklMVEVSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0NBU0U6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyY2FzZScpO1xuY29uc3QgVVJMX0xJRklMVEVSX0VYUFI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyZXhwcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaGlsaWdodCcpO1xuY29uc3QgVVJMX0xJRklMVEVSX0lOVjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJpbnYnKTtcblxuY2xhc3MgTG9nRmlsdGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSByaWdodHNMb2dPbmx5ID0gbG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdMb2cvcmlnaHRzJyk7XG5cdHByaXZhdGUgbGFzdENsaWNrZWQgPSBmYWxzZTtcblx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHQvLyBEZWZpbmUgaW50ZXJmYWNlIG1lc3NhZ2VzXG5cdFx0bXcubWVzc2FnZXMuc2V0KE1FU1NBR0VTKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRQb3J0bGV0TGluaygpOiB2b2lkIHtcblx0XHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0XHRpZiAocG9ydGxldExpbmspIHtcblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluayk7XG5cdFx0XHQkcG9ydGxldExpbmsuZmluZCgnYScpLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBEaXNwbGF5IGZvcm0gZGlyZWNsdHk/XG5cdFx0aWYgKFVSTF9MSUZJTFRFUiB8fCBVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcblx0XHRjb25zdCAkcGFnZVRvcDogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjY29udGVudFN1YiwgI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRjb25zdCAkZmllbGRTZXQ6IEpRdWVyeSA9ICQoJzxmaWVsZHNldD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ3JpZ2h0c0ZpbHRlcicpXG5cdFx0XHQuYWRkQ2xhc3MocmlnaHRzRmlsdGVyIGFzIHN0cmluZylcblx0XHRcdC50ZXh0KGluc3RydWN0aW9ucyk7XG5cdFx0Y29uc3QgJGxlZ2VuZDogSlF1ZXJ5ID0gJCgnPGxlZ2VuZD4nKS50ZXh0KExvZ0ZpbHRlci5tc2coJ2xlZ2VuZCcpKTtcblx0XHQkZmllbGRTZXQuYXBwZW5kKCRsZWdlbmQpO1xuXG5cdFx0bGV0IHJmU2VsZWN0ID0gPD48Lz47XG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0cmZTZWxlY3QgPSAoXG5cdFx0XHRcdDxzZWxlY3QgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fc2VsZWN0XCI+XG5cdFx0XHRcdFx0PG9wdGlvbj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkJykpfTwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1yZW1vdmVkJykpfTwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZC1vci1yZW1vdmVkJykpfTwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZC1yZW1vdmVkLXN0YXRpYycpKX08L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRjb25zdCBmaWVsZFNldElubmVyID0gKFxuXHRcdFx0PD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhZGdldC1sb2dfZmlsdGVyX19jaGVja2JveGVzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0XCIgdHlwZT1cImNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiPlxuXHRcdFx0XHRcdFx0XHR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnaW52ZXJ0LWxhYmVsJykpfVxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2Nhc2UtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2J1dHRvbnNcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1snY2R4LWJ1dHRvbiBjZHgtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnLCAnY2R4LWJ1dHRvbi0td2VpZ2h0LXByaW1hcnknXX1cblx0XHRcdFx0XHRcdHZhbHVlPVwiMFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ZpbHRlci1idXR0b24nKSl9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdoaWdobGlnaHQtYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdFx0Ly8gSW5qZWN0IHRoZXNlIEhUTUwgZWxlbWVudHMgaW50byB0aGUgZmllbGRzZXRcblx0XHQkZmllbGRTZXQuYXBwZW5kKHJmU2VsZWN0LCBmaWVsZFNldElubmVyKTtcblx0XHQkcGFnZVRvcC5hZnRlcigkZmllbGRTZXQpO1xuXG5cdFx0Ly8gU2V0IHBhc3NlZCB2YWx1ZXNcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS52YWwoVVJMX0xJRklMVEVSX0VYUFIgPz8gJycpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcsICFjYXNpbmcpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19pbnZlcnQnKS5wcm9wKCdjaGVja2VkJywgaW52ZXJ0ZWQpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cblx0XHQvLyBCaW5kIGNsaWNrIGFuZCBjaGFuZ2UgbGlzdGVuZXJzXG5cdFx0dGhpcy4kYm9keVxuXHRcdFx0LmZpbmQoJyNyaWdodHNGaWx0ZXInKVxuXHRcdFx0LmZpbmQoJ2lucHV0Jylcblx0XHRcdC5vbigna2V5dXAgY2hhbmdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPT0gJ2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpIHtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1cklucHV0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmIChvbGRJbnB1dCAhPT0gY3VySW5wdXQpIHtcblx0XHRcdFx0XHRvbGRJbnB1dCA9IGN1cklucHV0O1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0JGZpZWxkU2V0LmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHR0aGlzLmxhc3RDbGlja2VkID0gISEkZWxlbWVudC52YWwoKTtcblx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHR9KTtcblxuXHRcdGlmIChVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5maWx0ZXJMaShoaWxpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckxpKGhpbGlnaHQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gR3JhYiB0aGUgbGlzdCBvZiBhbGwgPGxpPiBpbiB0aGUgY29udGVudFxuXHRcdGNvbnN0ICRsaXN0SXRlbXM6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2JvZHlDb250ZW50JykuZmluZCgnbGknKTtcblx0XHRpZiAoISRsaXN0SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aGlsaWdodCA9ICEhKGhpbGlnaHQgfHwgdGhpcy5sYXN0Q2xpY2tlZC50b1N0cmluZygpID09PSAnMScpO1xuXG5cdFx0Ly8gR3JhYiBvcHRpb25zIGZyb20gZm9ybVxuXHRcdGxldCB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0dHlwZSA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19zZWxlY3QnKS5hdHRyKCdzZWxlY3RlZEluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52ZXJ0ID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydCcpLnByb3AoJ2NoZWNrZWQnKSBhcyBib29sZWFuO1xuXHRcdGNvbnN0IHNlYXJjaDogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudmFsKCk/LnRvU3RyaW5nKCkgPz8gJyc7XG5cdFx0Y29uc3QgZmxhZ3M6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcpID8gJ2lnJyA6ICdnJztcblx0XHRsZXQgcmVnZXhSZjogUmVnRXhwIHwgdW5kZWZpbmVkO1xuXHRcdHRyeSB7XG5cdFx0XHRyZWdleFJmID0gbmV3IFJlZ0V4cChzZWFyY2gsIGZsYWdzKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSByZWdleCB1c2VkIHRvIGdyYWIgdGhlIFNwZWNpYWw6TG9nL3JpZ2h0cyBjaGFuZ2VzXG5cdFx0Y29uc3QgUkVHRVhfUklHSFQ6IFJlZ0V4cCA9IC9eLio/dXNlcjouKj9cXHNmcm9tXFxzKC4qPylcXHN0b1xccyguKj8pXFxzXFx1MjAwRS4qPyQvaTtcblxuXHRcdC8vIEl0ZXJhdGVcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGxpc3RJdGVtcykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRsZXQgbG9vazogc3RyaW5nID0gJyc7XG5cblx0XHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbDpMb2cvcmlnaHRzXG5cdFx0XHRcdGNvbnN0IG9sZHI6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDEnKTtcblx0XHRcdFx0Y29uc3QgbmV3cjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMicpO1xuXHRcdFx0XHRjb25zdCBvbGRybDogc3RyaW5nW10gPSBvbGRyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRjb25zdCBuZXdybDogc3RyaW5nW10gPSBuZXdyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgb2xkcmwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbmV3cmwubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChvbGRybFtpXSA9PT0gbmV3cmxbal0pIHtcblx0XHRcdFx0XHRcdFx0b2xkcmxbaV0gPSAnJztcblx0XHRcdFx0XHRcdFx0bmV3cmxbal0gPSAnJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVtcjogc3RyaW5nID0gb2xkcmwuam9pbignLCcpO1xuXHRcdFx0XHRjb25zdCBhZGRyOiBzdHJpbmcgPSBuZXdybC5qb2luKCcsJyk7XG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGFkZHI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRcdGxvb2sgPSByZW1yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMic6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7cmVtcn0gJHthZGRyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICczJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtvbGRyfSAke25ld3J9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBBbnkgb3RoZXIgbGlzdCBvZiA8bGk+IG9iamVjdHNcblx0XHRcdFx0bG9vayA9ICRlbGVtZW50LnRleHQoKTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJycpO1xuXHRcdFx0JGVsZW1lbnQuc2hvdygpO1xuXG5cdFx0XHRpZiAocmVnZXhSZiAmJiAoKGxvb2s/LnNlYXJjaChyZWdleFJmKSA9PT0gLTEgJiYgaW52ZXJ0KSB8fCAobG9vaz8uc2VhcmNoKHJlZ2V4UmYpICE9PSAtMSAmJiAhaW52ZXJ0KSkpIHtcblx0XHRcdFx0aWYgKGhpbGlnaHQpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZmY5OScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFoaWxpZ2h0KSB7XG5cdFx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGtleSA9IGBmaWx0ZXItJHtrZXl9YDtcblx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xuXHR9XG59XG5cbmV4cG9ydCB7TG9nRmlsdGVyfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCByaWdodHNGaWx0ZXIgPSBcIkxvZ0ZpbHRlci1tb2R1bGVfX3JpZ2h0c0ZpbHRlcl9rWFRKOVdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInJpZ2h0c0ZpbHRlclwiOiByaWdodHNGaWx0ZXJcbn07XG4gICAgICAiLCAiY29uc3QgUkVHRVhfVEFSR0VUX1BBR0U6IFJlZ0V4cCA9XG5cdC9eKD86YWN0aXZldXNlcnN8Y2hlY2t1c2VyfGNvbnRyaWJ1dGlvbnN8aXBibG9ja2xpc3R8bGlua3NlYXJjaHxsb2d8c2VhcmNofCg/OnVuY2F0ZWdvcml6fHVudXN8d2FudCllZCg/OmNhdGVnb3JpfHRlbXBsYXQpZXN8d2FudGVkZmlsZXN8KD86c2hvcnR8bG9uZ3xhbmNpZW50fHVuY2F0ZWdvcml6ZWR8dW53YXRjaGVkfHdhbnRlZHxwcm90ZWN0ZWR8ZGVhZGVuZHxsb25lbHl8bmV3KXBhZ2VzfGZld2VzdHJldmlzaW9uc3x3aXRob3V0aW50ZXJ3aWtpfCg/OmRvdWJsZXxicm9rZW4pcmVkaXJlY3RzfHByb3RlY3RlZHRpdGxlc3xjcm9zc25hbWVzcGFjZWxpbmtzfHJlY2VudGNoYW5nZXN8Y2F0ZWdvcmllc3xkaXNhbWJpZ3VhdGlvbnN8bGlzdHJlZGlyZWN0c3xnbG9iYWx1c2Vyc3xnbG9iYWxibG9ja2xpc3R8bGlzdHVzZXJzfHdhdGNobGlzdHxtb3N0KD86bGlua2VkfHJldmlzaW9uc3xjYXRlZ29yaWVzKXxudWtlfHdoYXRsaW5rc2hlcmUpJC9pO1xuXG5leHBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfTtcbiIsICIvKipcbiAqIExvZyBmaWx0ZXIgc2NyaXB0XG4gKlxuICogQ3JlYXRlZCBieSBTcGxhcmthXG4gKiBBbWVuZGVkIGJ5IE1pa2UubGlmZWd1YXJkICYgTHVwb1xuICogUGFydGlhbGx5IHJld3JpdHRlbiBieSBEaWVCdWNoZVxuICpcbiAqIDxsaT4gZWxlbWVudCBGaWx0ZXIgU2NyaXB0LCB2ZXJzaW9uIFswLjJdXG4gKiBTaG91bGQgY3VycmVudGx5IHdvcmsgb24gYWxsIGtub3duIHNraW5zICh3aXRoIGEgI2NvbnRlbnRTdWIgb3IgI3RvcGJhcilcbiAqXG4gKiBtdy51dGlsLmdldFVybCggbXcuY29uZmlnLmdldCggJ3dnUGFnZU5hbWUnICkgKSArICc/JyArXG4gKiAnd2l0aEpTPU1lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJmxpZmlsdGVyPTEmbGlmaWx0ZXJleHByPVRFU1QmbGlmaWx0ZXJjYXNlJmxpZmlsdGVyaGlsaWdodCZsaWZpbHRlcmludidcbiAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xvZ0ZpbHRlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtSRUdFWF9UQVJHRVRfUEFHRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIGxvZ0ZpbHRlcigpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBXaGVuIHRvIGVuYWJsZSBhbGwgdGhpc1xuXHRpZiAoXG5cdFx0d2dBY3Rpb24gIT09ICdoaXN0b3J5JyAmJlxuXHRcdCFtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJykgJiZcblx0XHQhUkVHRVhfVEFSR0VUX1BBR0UudGVzdCh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0bmV3IExvZ0ZpbHRlcigkYm9keSkuYWRkUG9ydGxldExpbmsoKTsgLy8gTG9hZFxuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFNRyxXQUFXO0VBQ2hCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzVCOztBQ2ZBLElBQUFDLG9CQUFrQkMsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDQVgsSUFBTUMsZUFBZTs7QURHNUIsSUFBTUMsZUFBOEJDLEdBQUdDLEtBQUtDLGNBQWMsVUFBVTtBQUNwRSxJQUFNQyxvQkFBbUNILEdBQUdDLEtBQUtDLGNBQWMsY0FBYztBQUM3RSxJQUFNRSxvQkFBbUNKLEdBQUdDLEtBQUtDLGNBQWMsY0FBYztBQUM3RSxJQUFNRyx1QkFBc0NMLEdBQUdDLEtBQUtDLGNBQWMsaUJBQWlCO0FBQ25G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QUFELEdBQUE7SUFBQSxVQUFBO0FBQUF4QixpQkFBQTBCLEVBQUE7SUFBQTtFQUNEO0VBRUEsT0FBZTlFLElBQUkrRSxLQUFxQjtBQUN2Q0EsVUFBQSxVQUFBTixPQUFnQk0sR0FBRztBQUluQixXQUFPckcsR0FBR3NHLFFBQVFELEdBQUcsRUFBRUUsTUFBTTtFQUM5QjtBQUNEOztBRWpQQSxJQUFNQyxvQkFDTDs7QUNlRCxJQUFBQyxxQkFBc0I1RyxRQUFBLGlCQUFBO0NBRXJCLFNBQVM2RyxZQUFrQjtBQUMzQixRQUFNO0lBQUNuSCxXQUFBb0g7RUFBUyxJQUFJdEg7QUFDcEIsUUFBTTtJQUFDdUg7SUFBVUM7RUFBMEIsSUFBSTdHLEdBQUc4RyxPQUFPQyxJQUFJO0FBRzdELE1BQUkvRyxHQUFHOEcsT0FBT0MsSUFBSUosVUFBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTNHLEtBQUc4RyxPQUFPN0YsSUFBSTBGLFlBQVcsSUFBSTtBQUc3QixNQUNDQyxhQUFhLGFBQ2IsQ0FBQzVHLEdBQUdDLEtBQUtDLGNBQWMsVUFBVSxLQUNqQyxDQUFDc0csa0JBQWtCUSxLQUFLSCw4QkFBOEIsRUFBRSxHQUN2RDtBQUNEO0VBQ0Q7QUFFQSxRQUFBLEdBQUtKLG1CQUFBUSxTQUFRLEVBQUVDLEtBQU1wRyxXQUF5QztBQUM3RCxRQUFJUCxVQUFVTyxLQUFLLEVBQUVJLGVBQWU7RUFDckMsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiTUVTU0FHRVMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgInJpZ2h0c0ZpbHRlciIsICJVUkxfTElGSUxURVIiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9MSUZJTFRFUl9DQVNFIiwgIlVSTF9MSUZJTFRFUl9FWFBSIiwgIlVSTF9MSUZJTFRFUl9ISUxJR0hUIiwgIlVSTF9MSUZJTFRFUl9JTlYiLCAiTG9nRmlsdGVyIiwgIl9Mb2dGaWx0ZXIiLCAicmlnaHRzTG9nT25seSIsICJsb2NhdGlvbiIsICJocmVmIiwgImluY2x1ZGVzIiwgImxhc3RDbGlja2VkIiwgIiRib2R5IiwgImNvbnN0cnVjdG9yIiwgIm1lc3NhZ2VzIiwgInNldCIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJmaW5kIiwgImxlbmd0aCIsICJtc2ciLCAiJHBvcnRsZXRMaW5rIiwgIiQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYnVpbGRGb3JtIiwgIiRwYWdlVG9wIiwgIm9sZElucHV0IiwgImluc3RydWN0aW9ucyIsICJoaWRlIiwgImNhc2luZyIsICJoaWxpZ2h0IiwgImludmVydGVkIiwgIiRmaWVsZFNldCIsICJhdHRyIiwgImFkZENsYXNzIiwgInRleHQiLCAiJGxlZ2VuZCIsICJhcHBlbmQiLCAicmZTZWxlY3QiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJpZCIsICJodG1sIiwgImVzY2FwZSIsICJmaWVsZFNldElubmVyIiwgImNsYXNzTmFtZSIsICJodG1sRm9yIiwgInR5cGUiLCAidmFsdWUiLCAiYWZ0ZXIiLCAidmFsIiwgInByb3AiLCAidHJpZ2dlciIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImZpbHRlckxpIiwgImN1cklucHV0IiwgIl90aGlzJCRib2R5JGZpbmQkdmFsJCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCIsICIkbGlzdEl0ZW1zIiwgInRvU3RyaW5nIiwgImludmVydCIsICJzZWFyY2giLCAiZmxhZ3MiLCAicmVnZXhSZiIsICJSZWdFeHAiLCAiZXJyb3IiLCAiY29uc29sZSIsICJsb2ciLCAiUkVHRVhfUklHSFQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX2xvb2siLCAiX2xvb2syIiwgImVsZW1lbnQiLCAibG9vayIsICJvbGRyIiwgInJlcGxhY2UiLCAibmV3ciIsICJvbGRybCIsICJzcGxpdCIsICJuZXdybCIsICJpIiwgImoiLCAicmVtciIsICJqb2luIiwgImFkZHIiLCAiY29uY2F0IiwgImNzcyIsICJzaG93IiwgImVyciIsICJlIiwgImYiLCAia2V5IiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiUkVHRVhfVEFSR0VUX1BBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
